import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { BaseComponent } from 'app/shared';
import { CalendarEventsSearchModel } from '../providers';

@Component({
  selector: 'app-calendar-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class CalendarFiltersComponent extends BaseComponent implements OnChanges {
  @Input() search: CalendarEventsSearchModel = null;

  @Output() onChange = new EventEmitter<any>();

  @Output() onOpenMonthEvents = new EventEmitter<any>();

  private dates = null;

  constructor() {
    super();
  }

  ngOnChanges(): void {
    // not to do
  }

  onHandleChangeDates(event: any) {
    this.dates = event;
  }

  onSubmit(callback: Function) {
    const { dates } = this;
    if (!dates || !dates.startDate || !dates.endDate) {
      // eslint-disable-next-line no-alert
      alert('fill dates');
      return;
    }
    this.onChange.next(dates);
    this.dates = null;
    callback();
  }

  onClearFilters() {
    this.onChange.next(null);
  }
}
