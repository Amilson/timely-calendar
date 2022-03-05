import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  SharedOthersFiltersChooseModule,
  SharedDateRangePickerModule,
  SharedButtonModule
} from 'app/shared';
import { CalendarFiltersComponent } from './filters.component';

@NgModule({
  declarations: [CalendarFiltersComponent],
  exports: [CalendarFiltersComponent],
  imports: [
    CommonModule,
    SharedOthersFiltersChooseModule,
    SharedDateRangePickerModule,
    SharedButtonModule
  ]
})
export class CalendarFiltersModule {}
