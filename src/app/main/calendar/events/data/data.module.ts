import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarEventDataBottomComponent } from './bottom';
import { CalendarEventDataComponent } from './data.component';
import { CalendarEventImagesComponent } from './images';

@NgModule({
  declarations: [
    CalendarEventDataComponent,
    CalendarEventImagesComponent,
    CalendarEventDataBottomComponent
  ],
  exports: [CalendarEventDataComponent],
  imports: [CommonModule]
})
export class CalendarEventDataModule {}
