/* eslint-disable camelcase */
import { groupBy } from 'lodash';
import * as moment from 'moment';
import { CalendarEventModel } from './calendar-event.model';

export class CalendarEventResumeItem {
  month: string;

  values: {
    [key: number]: any[];
  };
}

export class CalendarEventResumeModel {
  items: CalendarEventModel[];

  groupedItems: any;

  constructor(data?: any) {
    if (!data) return;
    this.items = data.map((_: CalendarEventModel) => {
      const { id, description_short, event_status, images, start_datetime, title } = _;
      return {
        id,
        description_short,
        event_status,
        images,
        start_datetime,
        title
      };
    });

    const groupedByMonth: any = groupBy(this.items, (_: CalendarEventModel) => {
      return moment(_.start_datetime).format('YYYY-MM');
    });
    this.groupedItems = Object.entries(groupedByMonth).map(([month, value]) => {
      const groupedByDay = groupBy(value as any[], (_: CalendarEventModel) => {
        return moment(_.start_datetime).format('DD');
      });
      groupedByMonth[month] = {
        ...groupedByDay
      };
      return null;
    });
    this.groupedItems = groupedByMonth;
  }
}
