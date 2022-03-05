import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  SharedOthersFiltersChooseModule,
  SharedDateRangePickerModule,
  SharedButtonModule
} from 'app/shared';
import { CalendarMonthFiltersComponent } from './filters.component';

@NgModule({
  declarations: [CalendarMonthFiltersComponent],
  exports: [CalendarMonthFiltersComponent],
  imports: [
    CommonModule,
    SharedOthersFiltersChooseModule,
    SharedDateRangePickerModule,
    SharedButtonModule
  ]
})
export class CalendarMonthFiltersModule {}
