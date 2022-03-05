import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { DateRangeEventsModel } from 'app/model';
import { BaseComponent } from 'app/shared';
import { CalendarEventModel, CalendarEventResumeModel } from '../providers';

@Component({
  selector: 'app-calendar-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class CalendarResumeComponent extends BaseComponent implements OnChanges {
  @Input() events: CalendarEventModel[] = [];

  @Output() onClose = new EventEmitter<any>();

  _isLoading = true;

  _dateRangeEvents: DateRangeEventsModel;

  constructor() {
    super();
  }

  ngOnChanges(): void {
    const eventResume = new CalendarEventResumeModel(this.events);
    if (!eventResume.groupedItems) return;
    this._dateRangeEvents = new DateRangeEventsModel(eventResume.groupedItems);
  }
}
