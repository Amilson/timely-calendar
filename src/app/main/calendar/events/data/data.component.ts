import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'app/shared';
import { CalendarEventModel } from '../../providers';

@Component({
  selector: 'app-calendar-event-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class CalendarEventDataComponent extends BaseComponent implements OnInit {
  @Input() model: CalendarEventModel = null;

  _isLoading = true;

  constructor(private elementRef: ElementRef) {
    super();
  }

  ngOnInit() {
    // not to do
  }
}
