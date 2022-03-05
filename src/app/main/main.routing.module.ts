import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'calendars'
      },
      {
        path: 'calendars',
        children: [
          {
            path: '',
            // loadChildren: './calendars/calendars.module#CalendarsModule'
            loadChildren: () => {
              return import('./calendars/calendars.module').then((m: any) => {
                return m.CalendarsModule;
              });
            }
          },
          {
            path: 'posterboard',
            // loadChildren: './calendar/calendar.module#CalendarModule'
            loadChildren: () => {
              return import('./calendar/calendar.module').then((m: any) => {
                return m.CalendarModule;
              });
            }
          },
          {
            path: 'month',
            // loadChildren: './calendar-month/calendar-month.module#CalendarMonthModule'
            loadChildren: () => {
              return import('./calendar-month/calendar-month.module').then((m: any) => {
                return m.CalendarMonthModule;
              });
            }
          }
        ]
      }
    ])
  ]
})
export class MainModule {}
