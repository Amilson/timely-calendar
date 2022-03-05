import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonsService } from 'app/core/services/commons';
import { MainService } from 'app/core/services/main-service.service';
import { CoreService } from 'app/core/decorators';

@Injectable()
export class CalendarsService extends CommonsService implements Resolve<any> {
  constructor(mainService: MainService, private router: Router) {
    super(mainService);
  }

  @CoreService({
    requestInProgress: {
      showProgress: true
    }
  })
  public getData(): void {
    const { mainService } = this;
    this.__onLoadingInProgress$.next(true);

    mainService
      .post<any>('https://timelyapp.time.ly/api/calendars/info', {
        url: 'https://calendar.time.ly/6a37fb6n'
      })
      .subscribe(
        (resp: any) => {
          this.__data = this.getResponseData(resp, 'data');

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

        this.getData();
      },
      router
    });

    return null;
  }
}
