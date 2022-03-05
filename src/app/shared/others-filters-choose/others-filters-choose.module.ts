import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedButtonModule } from '../button/button.module';
import { SharedOthersFiltersChooseComponent } from './others-filters-choose.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedButtonModule],
  declarations: [SharedOthersFiltersChooseComponent],
  exports: [SharedOthersFiltersChooseComponent]
})
export class SharedOthersFiltersChooseModule {}
