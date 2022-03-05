import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarMainComponent } from './toolbar-main.component';

@NgModule({
  declarations: [ToolbarMainComponent],
  exports: [ToolbarMainComponent],
  imports: [CommonModule, RouterModule]
})
export class ToolbarMainModule {}
