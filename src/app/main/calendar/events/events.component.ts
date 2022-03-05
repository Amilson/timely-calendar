import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'app/shared';
import { CalendarEventModel } from '../providers';

@Component({
  selector: 'app-calendar-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class CalendarEventsComponent extends BaseComponent implements OnInit {
  @Input() events: CalendarEventModel[] = [];

  @Input() isLoading = true;

  constructor() {
    super();
  }

  ngOnInit() {
    // not to do
  }
}
