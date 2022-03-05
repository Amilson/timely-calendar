import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpConfigLoadingInProgressInterceptor } from './http-config-loading-in-progress.interceptor';

@NgModule({
  imports: [CommonModule]
})
export class HttpConfigInterceptorModule {
  public static forRoot(): ModuleWithProviders<HttpConfigInterceptorModule> {
    return {
      ngModule: HttpConfigInterceptorModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpConfigLoadingInProgressInterceptor,
          multi: true
        }
      ]
    };
  }
}
