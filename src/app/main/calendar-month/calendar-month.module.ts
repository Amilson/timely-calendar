import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedButtonModule, SharedDateRangeEventsModule } from 'app/shared';
import { CalendarMonthComponent } from './calendar-month.component';
import { CalendarMonthFiltersModule } from './filters';
import { CalendarMonthEventsService } from './providers';

@NgModule({
  declarations: [CalendarMonthComponent],
  imports: [
    CommonModule,
    SharedButtonModule,
    RouterModule.forChild([
      {
        path: ':calendarId',
        component: CalendarMonthComponent,
        resolve: {
          CalendarMonthEventsService
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      }
    ]),
    CalendarMonthFiltersModule,
    SharedDateRangeEventsModule
  ],
  providers: [CalendarMonthEventsService]
})
export class CalendarMonthModule {}
