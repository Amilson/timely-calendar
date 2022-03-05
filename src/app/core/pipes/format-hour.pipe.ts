import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatHour'
})
export class FormatHourPipe implements PipeTransform {
  transform(date: string): string {
    if (!date) return '';
    return moment(date).format('h:mm a');
  }
}
