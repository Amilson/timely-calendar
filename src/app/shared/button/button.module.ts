import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedButtonComponent],
  exports: [SharedButtonComponent]
})
export class SharedButtonModule {}
