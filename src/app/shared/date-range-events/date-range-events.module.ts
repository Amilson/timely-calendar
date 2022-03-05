import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from 'app/core/pipes';
import { SharedButtonModule } from '../button/button.module';
import { SharedDateRangeEventsComponent } from './date-range-events.component';
import { SharedDateRangeDayEventImagesComponent } from './day-event-images';
import { SharedDateRangeDayEventsComponent } from './day-events';
import { SharedDateRangeDayEventsDetailsComponent } from './day-events-details';

@NgModule({
  declarations: [
    SharedDateRangeEventsComponent,
    SharedDateRangeDayEventsComponent,
    SharedDateRangeDayEventsDetailsComponent,
    SharedDateRangeDayEventImagesComponent
  ],
  exports: [SharedDateRangeEventsComponent],
  imports: [CommonModule, PipesModule, SharedButtonModule]
})
export class SharedDateRangeEventsModule {}
