import * as moment from 'moment';

export class CalendarEventsSearchModel {
  startDate: string;

  endDate: string;

  constructor(data?: any) {
    if (!data) {
      data = {
        startDate: '',
        endDate: ''
      };
    }
    this.startDate =
      data.startDate ||
      `${moment()
        .startOf('month')
        .format('YYYY-MM-DD')}`;
    this.endDate =
      data.endDate ||
      `${moment()
        .endOf('month')
        .format('YYYY-MM-DD')}`;
  }

  public buildParams(): string {
    const { startDate, endDate } = this;
    return `?start_date=${startDate}&end_date=${endDate}`;
  }
}
