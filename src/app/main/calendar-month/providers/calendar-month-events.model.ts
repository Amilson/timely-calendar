/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import { CalendarEventImageModel } from 'app/model';
import * as moment from 'moment';
import { groupBy } from 'lodash';

export class CalendarMonthEventModel {
  cost_display: number;

  images: CalendarEventImageModel[];

  instance: string;

  cost: string;

  cost_external_url: string;

  calendarmonth_id: number;

  start_datetime: Date;

  end_datetime: Date;

  cost_type: string;

  timezone: string;

  post_to_twitter: boolean;

  post_to_facebook: boolean;

  title: string;

  is_example_event: boolean;

  feed_id: string;

  uid: string;

  allday: boolean;

  description_short: string;

  id: number;

  user: string;

  event_status: string;

  custom_url: string;

  ticket_type: string;

  url: string;

  canonical_url: string;

  featured: boolean;

  constructor(data?: any) {
    if (!data) return;
    this.cost_display = data.cost_display;
    this.images =
      data.images &&
      data.images.map((_: any) => {
        return new CalendarEventImageModel(_);
      });
    if (this.images && this.images.length) {
      // for simulate more than one image
      this.images.push(this.images[0]);
    }
    this.instance = data.instance;
    this.cost = data.cost;
    this.cost_external_url = data.cost_external_url;
    this.calendarmonth_id = data.calendarmonth_id;
    this.start_datetime = data.start_datetime;
    this.end_datetime = data.end_datetime;
    this.cost_type = data.cost_type;
    this.timezone = data.timezone;
    this.post_to_twitter = data.post_to_twitter;
    this.post_to_facebook = data.post_to_facebook;
    this.title = data.title;
    this.is_example_event = data.is_example_event;
    this.feed_id = data.feed_id;
    this.uid = data.uid;
    this.allday = data.allday;
    this.description_short = data.description_short;
    this.id = data.id;
    this.user = data.user;
    this.event_status = data.event_status;
    this.custom_url = data.custom_url;
    this.ticket_type = data.ticket_type;
    this.url = data.url;
    this.canonical_url = data.canonical_url;
    this.featured = data.featured;
  }

  public hasImages() {
    const { images } = this;
    return images && images.length && images[0].id;
  }
}

export class CalendarMonthEventsModel {
  items: {
    [key: string]: {
      [key: number]: any[];
    };
  };

  constructor(data: any) {
    if (!data) return;

    const groupedByMonth = {};
    data.map((_: any) => {
      const grouped = groupBy(_.value as any[], (_: CalendarMonthEventModel) => {
        return moment(_.start_datetime).format('DD');
      });
      groupedByMonth[moment(_.date).format('YYYY-MM')] = {
        ...groupedByMonth[moment(_.date).format('YYYY-MM')],
        ...grouped
      };
      return null;
    });
    this.items = groupedByMonth;
  }
}
