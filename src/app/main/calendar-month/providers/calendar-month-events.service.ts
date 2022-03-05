import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonsService } from 'app/core/services/commons';
import { MainService } from 'app/core/services/main-service.service';
import { CoreService } from 'app/core/decorators';
import { unionBy } from 'lodash';
import { CalendarMonthEventsSearchModel } from './calendar-month-events-search.model';

@Injectable()
export class CalendarMonthEventsService extends CommonsService implements Resolve<any> {
  constructor(mainService: MainService, private router: Router) {
    super(mainService);
  }

  private mappingData(data: any) {
    if (!data) return null;
    return Object.entries(data).map(([date, value]) => {
      return {
        date,
        value
      };
    });
  }

  @CoreService({
    requestInProgress: {
      showProgress: true
    }
  })
  public getData(): void {
    const { mainService, __params, __search } = this;
    const { calendarId } = __params;

    const search = new CalendarMonthEventsSearchModel({
      ...__search
    });

    this.__onLoadingInProgress$.next(true);
    this.__onSearchChanged$.next(true);

    const url = `https://timelyapp.time.ly/api/calendars/${calendarId}/events`;
    mainService.get<any>(`${url}${search.buildParams()}&group_by_date=true&per_page=600`).subscribe(
      (resp: any) => {
        let items = this.getResponseData(this.getResponseData(resp, 'data'), 'items');
        items = this.mappingData(items);
        this.__data = unionBy(this.__data || [], items || [], 'date');
        this.__page = this.getResponsePageData(this.getResponseData(resp, 'data'));

        this.__onDataChanged$.next(null);
        this.__onLoadingInProgress$.next(false);
      },
      () => {
        this.__onDataChanged$.next(null);
        this.__onLoadingInProgress$.next(false);
      }
    );
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    const { router } = this;

    super.resolve(route, state, {
      callbackMain: () => {
        this.__data = null;
        this.__page = null;
        this.__search = route.queryParams;
        this.__params = route.params;

        const { calendarId } = this.__params;

        if (!calendarId) {
          router.navigate(['app/main/calendars']);
          return;
        }

        this.getData();
      },
      callbackPagination: this.getData.bind(this),
      router
    });

    return null;
  }

  setSearch(search: CalendarMonthEventsSearchModel): void {
    const { calendarId } = this.__params;
    this.setSearchByUrl(this.router, `/app/main/calendars/month/${calendarId}`, search);
  }
}
