import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedButtonActionsModule, SharedButtonModule } from 'app/shared';
import { CalendarComponent } from './calendar.component';
import { CalendarEventsModule } from './events';
import { CalendarEventsService } from './providers';
import { CalendarResumeModule } from './resume';
import { CalendarFiltersModule } from './filters';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    SharedButtonModule,
    SharedButtonActionsModule,
    RouterModule.forChild([
      {
        path: ':calendarId',
        component: CalendarComponent,
        resolve: {
          CalendarEventsService
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange'
      }
    ]),
    CalendarEventsModule,
    CalendarResumeModule,
    CalendarFiltersModule
  ],
  providers: [CalendarEventsService]
})
export class CalendarModule {}
