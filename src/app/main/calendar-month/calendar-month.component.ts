import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateRangeEventsModel } from 'app/model';
import { BaseComponent } from 'app/shared';
import { takeUntil } from 'rxjs/operators';
import {
  CalendarMonthEventsModel,
  CalendarMonthEventsSearchModel,
  CalendarMonthEventsService
} from './providers';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarMonthComponent extends BaseComponent implements OnInit {
  _events: CalendarMonthEventsModel;

  _isLoading = true;

  _dateRangeEvents: DateRangeEventsModel;

  _currentMonth = null;

  _search: CalendarMonthEventsSearchModel;

  constructor(private calendarMonthEventsService: CalendarMonthEventsService) {
    super();
  }

  ngOnInit() {
    const { calendarMonthEventsService } = this;

    super.ngOnInit({
      paginationOptions: {
        service: calendarMonthEventsService,
        mainElement: 'container-3'
      }
    });

    calendarMonthEventsService.__onDataChanged$
      .pipe(takeUntil(this.__unsubscribeAll))
      .subscribe(() => {
        this._events = new CalendarMonthEventsModel(calendarMonthEventsService.__data);
        this._dateRangeEvents = new DateRangeEventsModel(this._events.items);
        this._currentMonth = this._dateRangeEvents.getOldMonthEvent();
      });

    calendarMonthEventsService.__onLoadingInProgress$
      .pipe(takeUntil(this.__unsubscribeAll))
      .subscribe((val: boolean) => {
        this._isLoading = val;
      });

    calendarMonthEventsService.__onSearchChanged$
      .pipe(takeUntil(this.__unsubscribeAll))
      .subscribe(() => {
        this._search = new CalendarMonthEventsSearchModel(calendarMonthEventsService.__search);
      });
  }

  onChangeFilters(event) {
    const search = new CalendarMonthEventsSearchModel(event);
    this.calendarMonthEventsService.setSearch(search);
  }
}
