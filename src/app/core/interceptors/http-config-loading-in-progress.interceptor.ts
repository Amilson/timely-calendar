import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SharedProgressBarService } from 'app/shared';
import { RequestLoadingInProgress } from 'app/interfaces';
import { MainHandlingService } from '../services/main-handling.service';
import { persistNullEmptyUndefined } from '../utils';

@Injectable()
export class HttpConfigLoadingInProgressInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
    // no to do
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { injector, isLoadingInProgressProperty } = this;
    const handlingService: MainHandlingService = injector.get(MainHandlingService);
    const progressBarService: SharedProgressBarService = injector.get(SharedProgressBarService);

    const inProgress: RequestLoadingInProgress = handlingService.getServiceCredentials()
      ? handlingService.getServiceCredentials().requestInProgress
      : null;
    if (isLoadingInProgressProperty(inProgress)) {
      progressBarService.show();
    }

    return next.handle(request).pipe(
      finalize(() => {
        if (isLoadingInProgressProperty(inProgress)) {
          progressBarService.hide();
        }
      })
    );
  }

  private isLoadingInProgressProperty(mlp: RequestLoadingInProgress): boolean {
    return persistNullEmptyUndefined(mlp) && persistNullEmptyUndefined(mlp.showProgress)
      ? mlp.showProgress
      : true;
  }
}
