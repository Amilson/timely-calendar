import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [SharedProgressBarComponent],
  imports: [CommonModule],
  exports: [SharedProgressBarComponent]
})
export class SharedProgressBarModule {}
