import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedButtonModule } from '../button/button.module';
import { SharedButtonActionsComponent } from './button-actions.component';

@NgModule({
  imports: [CommonModule, SharedButtonModule],
  declarations: [SharedButtonActionsComponent],
  exports: [SharedButtonActionsComponent]
})
export class SharedButtonActionsModule {}
