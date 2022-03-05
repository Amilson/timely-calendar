import { NgModule } from '@angular/core';
import { FormatHourPipe } from './format-hour.pipe';

@NgModule({
  declarations: [FormatHourPipe],
  exports: [FormatHourPipe]
})
export class PipesModule {}
