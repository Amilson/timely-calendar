import { Component, Input, OnInit } from '@angular/core';
import { getRandomColorOpacity } from 'app/core/utils';

@Component({
  selector: 'shared-date-range-day-events',
  templateUrl: './day-events.component.html',
  styleUrls: ['./day-events.component.scss']
})
export class SharedDateRangeDayEventsComponent implements OnInit {
  @Input()
  model: {
    [key: string]: {
      [key: number]: any[];
    };
  } = null;

  _color = getRandomColorOpacity(0.2);

  constructor() {
    // not to do
  }

  ngOnInit() {
    // not to do
  }
}
