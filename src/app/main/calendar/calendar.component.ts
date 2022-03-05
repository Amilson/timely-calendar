import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from 'app/shared';
import { takeUntil } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CalendarEventModel, CalendarEventsSearchModel, CalendarEventsService } from './providers';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInRight', [
      state(
        'void',
        style({
          transform: 'translateX(100%)'
        })
      ),
      state(
        '*',
        style({
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', animate('300ms')),
      transition('* => void', animate('300ms'))
    ])
  ]
})
export class CalendarComponent extends BaseComponent implements OnInit {
  _events: CalendarEventModel[] = [];

  _isLoading = true;

  _showResume = true;

  _search: CalendarEventsSearchModel;

  constructor(private calendarEventsService: CalendarEventsService) {
    super();
  }

  ngOnInit() {
    const { calendarEventsService } = this;

    super.ngOnInit({
      paginationOptions: {
        service: calendarEventsService,
        mainElement: 'container-3'
      }
    });

    calendarEventsService.__onDataChanged$.pipe(takeUntil(this.__unsubscribeAll)).subscribe(() => {
      this._events = calendarEventsService.__data;
    });

    calendarEventsService.__onLoadingInProgress$
      .pipe(takeUntil(this.__unsubscribeAll))
      .subscribe((val: boolean) => {
        this._isLoading = val;
      });

    calendarEventsService.__onSearchChanged$
      .pipe(takeUntil(this.__unsubscribeAll))
      .subscribe(() => {
        this._search = new CalendarEventsSearchModel(calendarEventsService.__search);
      });
  }

  onChangeFilters(event) {
    const search = new CalendarEventsSearchModel(event);
    this.calendarEventsService.setSearch(search);
  }
}
