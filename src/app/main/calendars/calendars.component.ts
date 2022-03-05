/* eslint-disable camelcase */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'app/shared';
import { takeUntil } from 'rxjs/operators';
import { CalendarsService } from './providers';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.scss']
})
export class CalendarsComponent extends BaseComponent implements OnInit {
  _calendars: any = null;

  _isLoading = true;

  constructor(private calendarsService: CalendarsService, private router: Router) {
    super();
  }

  ngOnInit() {
    const { calendarsService } = this;
    calendarsService.__onDataChanged$.pipe(takeUntil(this.__unsubscribeAll)).subscribe(() => {
      this._calendars = calendarsService.__data;
    });

    calendarsService.__onLoadingInProgress$
      .pipe(takeUntil(this.__unsubscribeAll))
      .subscribe((val: boolean) => {
        this._isLoading = val;
      });
  }
}
