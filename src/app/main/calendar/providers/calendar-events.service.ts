import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonsService } from 'app/core/services/commons';
import { MainService } from 'app/core/services/main-service.service';
import { CoreService } from 'app/core/decorators';
import { unionBy } from 'lodash';
import { CalendarEventModel } from './calendar-event.model';
import { CalendarEventsSearchModel } from './calendar-events-search.model';

@Injectable()
export class CalendarEventsService extends CommonsService implements Resolve<any> {
  private routeParams: any;

  constructor(mainService: MainService, private router: Router) {
    super(mainService);
  }

  private mappingData(data: any) {
    if (!data) return null;
    return data.map((_: any) => {
      return new CalendarEventModel(_);
    });
  }

  @CoreService({
    requestInProgress: {
      showProgress: true
    }
  })
  public getData(): void {
    const { mainService, routeParams, __search } = this;
    const { calendarId } = routeParams;

    const search = new CalendarEventsSearchModel({
      ...__search
    });

    this.__onLoadingInProgress$.next(true);
    this.__onSearchChanged$.next(true);

    const url = `https://timelyapp.time.ly/api/calendars/${calendarId}/events`;

    mainService.get<any>(this.getNormalizedUrl(`${url}${search.buildParams()}`)).subscribe(
      (resp: any) => {
        let items = this.getResponseData(this.getResponseData(resp, 'data'), 'items');
        items = this.mappingData(items);
        this.__data = unionBy(this.__data || [], items || [], 'id');
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
        this.routeParams = route.params;

        const { calendarId } = this.routeParams;

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

  setSearch(search: CalendarEventsSearchModel) {
    const { calendarId } = this.routeParams;
    this.setSearchByUrl(this.router, `/app/main/calendars/posterboard/${calendarId}`, search);
  }
}
