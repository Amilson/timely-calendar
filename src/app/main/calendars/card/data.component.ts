/* eslint-disable camelcase */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendars-card-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class CalendarsCardDataComponent {
  @Input() model: any = null;

  _isLoading = true;

  constructor(
    private router: Router
  ) {
    // not to do
  }

  onHandleDetails(view: string) {
    const { model } = this;
    const { id } = model;
    this.router.navigate([`/app/main/calendars/${view}/${id}`]);
  }
}
