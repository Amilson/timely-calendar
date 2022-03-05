import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarEventDataModule } from './data';
import { CalendarEventsComponent } from './events.component';

@NgModule({
  declarations: [CalendarEventsComponent],
  exports: [CalendarEventsComponent],
  imports: [CommonModule, CalendarEventDataModule]
})
export class CalendarEventsModule {}
