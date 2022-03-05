import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedProgressBarModule } from 'app/shared';
import { FooterModule, ToolbarMainModule } from '../components';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, ToolbarMainModule, FooterModule, SharedProgressBarModule],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule {}
