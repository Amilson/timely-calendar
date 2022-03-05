import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { persistNullEmptyUndefined } from 'app/core/utils';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryParamsService {
  constructor(private router: Router) {
    // not tod o
  }

  private getLastChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    if (route.firstChild) {
      return this.getLastChild(route.firstChild);
    }

    return route;
  }

  public setData(field: string, value: any): any {
    const { root } = this.router.routerState.snapshot;
    const route: ActivatedRouteSnapshot = this.getLastChild(root);
    route.data[field] = value;
  }

  public getData(field: string): any {
    const { root } = this.router.routerState.snapshot;
    const route: ActivatedRouteSnapshot = this.getLastChild(root);

    const found: any = persistNullEmptyUndefined(route) ? route.data[field] : null;
    return found;
  }

  public getDataFromCurrentNavigation(field: string): any {
    const navigation = this.router.getCurrentNavigation();
    let state: any = null;
    if (persistNullEmptyUndefined(navigation)) {
      state = navigation.extras.state;
    }

    return state ? state[field] : null;
  }

  public getParam(param: string): string | null {
    const { root } = this.router.routerState.snapshot;
    const route: ActivatedRouteSnapshot = this.getLastChild(root);
    let found: string = persistNullEmptyUndefined(route) ? route.paramMap.get(param) : '';
    if (!persistNullEmptyUndefined(found)) found = this.getData(param);
    return found;
  }
}
