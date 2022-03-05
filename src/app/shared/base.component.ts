import { OnDestroy } from '@angular/core';
import { CommonsService } from 'app/core/services/commons';
import { PaginationOptions } from 'app/interfaces';
import { Subject } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {
  __formErrors: any | any[];

  __unsubscribeAll: Subject<any> = new Subject();

  __paginationOptions: PaginationOptions;

  private paginationFunc: any;

  private handlePagination(create = true) {
    const { __paginationOptions } = this;

    if (__paginationOptions) {
      const { mainElement, service } = __paginationOptions;

      const element = document.getElementById(mainElement);

      if (element) {
        element.scroll = null;
        element.onscroll = null;

        element.removeEventListener('scroll', (element as any).eventListeners('scroll'));
        element.removeEventListener('scroll', (element as any).eventListeners('scroll')[0]);
        if (create) {
          element.addEventListener('scroll', () => {
            const { scrollTop, scrollHeight, offsetHeight } = element;
            const contentHeight = scrollHeight - offsetHeight;

            if (contentHeight <= scrollTop) {
              service.doPagination();
            }
          });
        }
      }
    }
  }

  public clearAllServiceData(clearData: boolean) {
    const context = this;
    Object.values(context).forEach((ctx: any) => {
      if (ctx instanceof CommonsService) {
        ctx.clear(clearData);
      }
    });
  }

  public ngOnInit(args: { paginationOptions?: PaginationOptions }) {
    if (args && args.paginationOptions) {
      this.__paginationOptions = args.paginationOptions;
      this.handlePagination();
    }
  }

  public ngOnDestroy(clearData: boolean = true) {
    this.__unsubscribeAll.next();
    this.__unsubscribeAll.complete();
    this.clearAllServiceData(clearData);
  }

  public goBack() {
    window.history.back();
  }
}
