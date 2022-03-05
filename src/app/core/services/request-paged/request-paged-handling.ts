/* eslint-disable camelcase */
import { RequestPaged } from 'app/interfaces';
import { HttpParams } from '@angular/common/http';

export class RequestPagedHandling {
  private url?: string;

  private pagedParams: RequestPaged = {
    page: {
      from: 0,
      size: 30
    }
  };

  constructor(_url?: string, _pagedParams?: RequestPaged) {
    this.url = _url;
    this.pagedParams = _pagedParams || {
      page: {
        from: 0,
        size: 30
      }
    };
  }

  private handlePagedValuesFromApi(url: string) {
    if (url.search('\\?') < 0) return url;
    const params = url.substring(url.search('\\?') + 1, url.length);
    url = url.substring(0, url.search('\\?'));
    return `${url}?${new HttpParams({
      fromString: params
    })
      .delete('per_page')
      .delete('page')
      .toString()}`;
  }

  private getUrlParams(url: string): string {
    const { pagedParams } = this;
    const { from = 0, size = 30, has_next } = pagedParams.page;
    let page = from / size + 1;
    if (has_next) {
      page += 1;
    }
    const hasInitialQueryParams = url.search('\\?') > 0;
    return `${!hasInitialQueryParams ? '?' : '&'}page=${page || 0}&per_page=${size || 30}`;
  }

  public getRequestWithPagedParams(): string {
    const { url } = this;
    const handled = this.handlePagedValuesFromApi(url);
    return `${handled}${this.getUrlParams(handled)}`;
  }
}
