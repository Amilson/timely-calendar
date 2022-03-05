import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedButtonModule } from 'app/shared';
import { CalendarsComponent } from './calendars.component';
import { CalendarsCardDataComponent } from './card';
import { CalendarsService } from './providers';

@NgModule({
  declarations: [
    CalendarsComponent,
    CalendarsCardDataComponent
  ],
  imports: [
    CommonModule,
    SharedButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarsComponent,
        resolve: {
          CalendarsService
        }
      }
    ])
  ],
  providers: [CalendarsService]
})
export class CalendarsModule {}
