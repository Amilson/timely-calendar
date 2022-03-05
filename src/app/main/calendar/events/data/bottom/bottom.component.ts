import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'app/shared';
import { CalendarEventModel } from '../../../providers';

@Component({
  selector: 'app-calendar-event-data-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class CalendarEventDataBottomComponent extends BaseComponent implements OnInit {
  @Input() model: CalendarEventModel = null;

  _isLoading = true;

  constructor() {
    super();
  }

  ngOnInit() {
    // not to do
  }
}
