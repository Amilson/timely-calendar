import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'app/core/pipes';
import { SharedButtonModule } from '../button/button.module';
import { SharedDateRangePickerComponent } from './date-range-picker.component';

@NgModule({
  declarations: [SharedDateRangePickerComponent],
  exports: [SharedDateRangePickerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PipesModule, SharedButtonModule]
})
export class SharedDateRangePickerModule {}
