import * as moment from 'moment';

export class DateRangeMonthEvents {
  days: {
    [key: string]: {
      [key: number]: any[];
    };
    // eslint-disable-next-line object-curly-newline
  } = {};

  constructor(data: any) {
    Object.entries(data).map(([key, value]) => {
      (this.days[key] as any) = value;
      return null;
    });
  }

  public getEventsByDay(day: string) {
    return this.days[day];
  }
}

export class DateRangeEventsModel {
  items: {
    [key: string]: {
      [key: number]: any[];
    };
  };

  constructor(data: any) {
    this.items = data;
  }

  public getEventsByMonth(month: string): DateRangeMonthEvents {
    const { items } = this;
    if (!items) return null;
    const events = items[month];
    if (events) {
      const teste = new DateRangeMonthEvents(events);
      return teste;
    }
    return null;
  }

  public getOldMonthEvent() {
    const { items } = this;
    let month = moment().format('YYYY-MM');
    if (!items) return month;
    const handled = Object.entries(items)
      .map(([key, value]) => {
        return {
          key: Number(`${key}`.replace('-', '')),
          month: key
        };
      })
      .sort((a: any, b: any) => {
        return a.key < b.key ? -1 : 1;
      });
    if (handled) {
      month = handled[0].month;
    }
    return month;
  }
}
