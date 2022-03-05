/* eslint-disable prefer-spread */
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DateRangeEventsModel } from 'app/model';
import * as moment from 'moment';

@Component({
  selector: 'shared-date-range-events',
  templateUrl: './date-range-events.component.html',
  styleUrls: ['./date-range-events.component.scss']
})
export class SharedDateRangeEventsComponent implements OnInit, OnChanges {
  @Input() events: DateRangeEventsModel;

  @Input()
  set currentMonth(value: any) {
    if (value) {
      this._date = moment(`${value}-01`);
    }
  }

  @Output() onChange = new EventEmitter<any>();

  private today = moment().format('YYYY-MM-DD');

  public _date = moment();

  public _daysArr = [];

  constructor() {
    // not to do
  }

  private createCalendar(month: any) {
    const firstDay = moment(month).startOf('M');
    const lastDay = moment(month).endOf('M');

    const days = Array.apply(null, {
      length: month.daysInMonth()
    })
      .map(Number.call, Number)
      .map((n: number) => {
        return moment(firstDay).add(n, 'd');
      });

    let n = 0;
    while (n < firstDay.weekday()) {
      days.unshift(null);
      n += 1;
    }
    n = 0;
    while (n < 7 - lastDay.weekday()) {
      days.push(null);
      n += 1;
    }

    let index = 1;
    let group = [];
    const grouped = [];

    Object.entries(days).map(([key, value]: [string, any]) => {
      if (index > 7) {
        index = 1;
        grouped.push(group);
        group = [];
      }

      group.push(value);
      index += 1;
      return null;
    });
    grouped.push(group);

    return grouped;
  }

  private build() {
    this._daysArr = this.createCalendar(this._date);
  }

  ngOnInit() {
    this.build();
  }

  ngOnChanges(): void {
    this.build();
  }

  onHandleSelectedDate(day: any) {}

  isSelected(day: any) {
    if (!day) {
      return false;
    }
    return false;
  }

  isToday(day: any) {
    if (!day) {
      return false;
    }

    return moment().format('L') === day.format('L');
  }

  getEventsByDay(date: moment.Moment) {
    if (!date || !this.events) return null;

    const month = date.format('YYYY-MM');
    const day = date.format('DD');
    const monthEvents = this.events.getEventsByMonth(month);

    if (monthEvents) {
      return monthEvents.getEventsByDay(day) || [];
    }
    return [];
  }

  nextMonth() {
    this._date.add(1, 'M');

    this._daysArr = this.createCalendar(this._date);
  }

  previousMonth() {
    this._date.subtract(1, 'M');

    this._daysArr = this.createCalendar(this._date);
  }
}
