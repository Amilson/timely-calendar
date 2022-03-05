import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { StyleSettings } from 'app/interfaces';
import { MainService } from '../main-service.service';
import { CommonsService } from '../commons';
import { StyleSettingsService } from './style-settings.service';

@Injectable({
  providedIn: 'root'
})
export class StyleService extends CommonsService {
  private readonly settingsSubject$: BehaviorSubject<StyleSettings> = new BehaviorSubject(null);

  constructor(mainService: MainService, private styleSettings: StyleSettingsService) {
    super(mainService);
  }

  public boostrap(callback?: Function) {
    const { mainService, settingsSubject$, styleSettings } = this;

    mainService.get<any>('assets/themes/style-settings.json').subscribe(
      (_: StyleSettings) => {
        styleSettings.apply(_, callback);
        settingsSubject$.next(_);
      },
      (err: HttpErrorResponse) => {
        console.error('style-settings not found!');
        throwError(err);
      }
    );
  }

  public settings(): Observable<any> {
    return this.settingsSubject$.asObservable();
  }
}
