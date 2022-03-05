import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedDateRangeEventsModule } from 'app/shared';
import { CalendarResumeComponent } from './resume.component';

@NgModule({
  declarations: [CalendarResumeComponent],
  exports: [CalendarResumeComponent],
  imports: [CommonModule, SharedDateRangeEventsModule]
})
export class CalendarResumeModule {}
