/* eslint-disable camelcase */
export interface CalendarEventImageProperties {
  width: number;
  url: string;
  height: number;
}

export class CalendarEventImageModel {
  small: CalendarEventImageProperties;

  thumbnail: CalendarEventImageProperties;

  reference_id: number;

  file_name: string;

  created_at: Date;

  medium: CalendarEventImageProperties;

  title: string;

  deleted_at: Date;

  sizes: {
    small: CalendarEventImageProperties;
    thumbnail: CalendarEventImageProperties;
    medium: CalendarEventImageProperties;
    full: CalendarEventImageProperties;
  };

  updated_at: Date;

  file_hash: string;

  id: number;

  full: CalendarEventImageProperties;

  constructor(data?: any) {
    if (!data) return;
    this.small = data.small;
    this.thumbnail = data.thumbnail;
    this.reference_id = data.reference_id;
    this.file_name = data.file_name;
    this.created_at = data.created_at;
    this.medium = data.medium;
    this.title = data.title;
    this.deleted_at = data.deleted_at;
    this.sizes = data.sizes;
    this.updated_at = data.updated_at;
    this.file_hash = data.file_hash;
    this.id = data.id;
    this.full = data.full;
  }
}
