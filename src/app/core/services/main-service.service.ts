import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import * as FileSaver from 'file-saver';
import { catchError, map } from 'rxjs/operators';
import { MainHandlingService } from './main-handling.service';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(protected http: HttpClient, public handlingService: MainHandlingService) {
    // not to do
  }

  public get<T>(url: string, options?: T): Observable<T> {
    return this.http.get<T>(url, options);
  }

  public post<T>(url: string, params: T, options?: T): Observable<T> {
    return this.http.post<T>(url, params, options);
  }

  public put<T>(url: string, params: T, options?: T): Observable<T> {
    return this.http.put<T>(url, params, options);
  }

  public delete<T>(url: string, params?: T): Observable<T> {
    return this.http.delete<T>(url, params);
  }

  public download<T>(url: string, options?: T, filename?: string) {
    this.http.get<T>(url, options).subscribe(
      (resp: any) => {
        const { headers, body } = resp;
        const contentType = headers.get('Content-Type');
        const contentDisposition = headers.get('Content-Disposition');
        if (contentDisposition) {
          filename = contentDisposition
            .split(';')[1]
            .split('filename')[1]
            .split('=')[1]
            .trim()
            .replace(new RegExp(/"/g), '');
        }
        const blob = new Blob([body], {
          type: `${contentType}`
        });
        FileSaver.saveAs(blob, filename);
      },
      (err: HttpErrorResponse) => {
        throwError(err);
      }
    );
  }

  public downloadOb<T>(url: string, options?: T, filename?: string): Observable<any> {
    return this.http.get<any>(url, options).pipe(
      map((resp: any) => {
        const { headers, body } = resp;
        const contentType = headers.get('Content-Type');
        const contentDisposition = headers.get('Content-Disposition');
        if (contentDisposition) {
          filename = contentDisposition
            .split(';')[1]
            .split('filename')[1]
            .split('=')[1]
            .trim()
            .replace(new RegExp(/"/g), '');
        }
        const blob = new Blob([body], {
          type: `${contentType}`
        });
        FileSaver.saveAs(blob, filename);
        return null;
      }),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
}
