/* eslint-disable camelcase */
import { RequestPaged, ResponsePaged } from 'app/interfaces';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { CoreService } from 'app/core/decorators';
import { getRandomString } from 'app/core/utils';
import { MainService } from '../main-service.service';
import { RequestPagedHandling } from '../request-paged';

export class CommonsService {
  __data: any | any[];

  __params: any | any[];

  __search: any;

  __page: ResponsePaged;

  __requestPaged: RequestPaged = null;

  __onDataChanged$: BehaviorSubject<any> = new BehaviorSubject(null);

  __onLoadingInProgress$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  __onSearchChanged$: BehaviorSubject<any> = new BehaviorSubject(null);

  __onErrorChanged$: BehaviorSubject<any> = new BehaviorSubject(null);

  __callbackPagination: Function = () => {
    // eslint-disable-next-line no-console
    return console.error('Method callbackPagination needs to be declared');
  };

  constructor(public mainService?: MainService) {
    // not to do
  }

  private navigateToErrorPage(statusCode: number, router: Router) {
    const routes = {
      403: 'forbidden',
      404: 'not-found',
      500: 'service-problems',
      503: 'service-problems'
    };
    const route = '/app/pages';

    if (!router) {
      // eslint-disable-next-line no-console
      console.error('Router must be declared');
    } else {
      router.navigate([`${route}/${routes[statusCode]}`.toLowerCase()], {
        skipLocationChange: true
      });
    }
  }

  setPage(requestPaged: RequestPaged) {
    this.__requestPaged = {
      ...this.__requestPaged,
      ...requestPaged
    };
    return this;
  }

  nextPage(): boolean {
    if (!this.__requestPaged) return false;
    const { page } = this.__requestPaged as any;
    const { number, size, total } = page;
    if (size < total) {
      this.__requestPaged = {
        ...this.__requestPaged,
        page: {
          ...page,
          number: number + 1
        }
      };
      return true;
    }
    return false;
  }

  getResponseData(data: any, field: string): any[] | any {
    return data[field];
  }

  getResponsePageData(data: any): any {
    const { total, from, size, has_prior, has_next } = data;
    return {
      ...this.__page,
      total,
      from,
      size,
      has_prior,
      has_next
    };
  }

  getNormalizedUrl(url: string): string {
    const { __requestPaged } = this;
    return new RequestPagedHandling(url, __requestPaged).getRequestWithPagedParams();
  }

  clear(clearData: boolean) {
    if (clearData) {
      this.__data = null;
      this.__requestPaged = null;
      this.__params = null;
      this.__page = null;
    }
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    otherArgs?: {
      callbackMain: Function;
      router?: Router;
      callbackPagination?: Function;
    }
  ) {
    this.__page = null;
    this.__requestPaged = null;

    if (otherArgs && otherArgs.callbackPagination) {
      this.__callbackPagination = otherArgs.callbackPagination;
    }

    otherArgs.callbackMain();
  }

  getHTTPHeaderApplicationPDF(): Object {
    return {
      observe: 'response',
      responseType: 'blob'
    };
  }

  @CoreService({
    requestInProgress: {
      showProgress: true
    }
  })
  genericMethod(link: any, data?: any, callback?: Function) {
    const { mainService } = this;
    const { href, type } = link;
    mainService[type.toLowerCase()]<any>(`${href}`, data).subscribe(
      (resp: any) => {
        if (callback) callback(resp);
      },
      (err: HttpErrorResponse) => {
        if (callback) callback();
        throwError(err);
      }
    );
  }

  doPagination() {
    if (!this.__onLoadingInProgress$.value) {
      const hasMorePages = this.setPage({
        page: {
          ...this.__page
        }
      }).nextPage();

      if (hasMorePages && this.__callbackPagination) {
        this.__callbackPagination();
      }
    }
  }

  setSearchByUrl(router: Router, url: string, search: any, extras?: any) {
    this.__data = null;
    this.__page = null;
    this.__onDataChanged$.next(null);
    this.__onLoadingInProgress$.next(false);

    router.navigate([url], {
      queryParams: {
        ...search,
        r: getRandomString(30)
      },
      queryParamsHandling: 'merge',
      ...extras
    });
  }
}
