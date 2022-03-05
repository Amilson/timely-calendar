/* eslint-disable camelcase */
import { CommonsService } from 'app/core/services/commons';

interface Sort {
  field?: string;
  direction?: string;
}

interface Page {
  from?: number;
  has_next?: boolean;
  hast_prior?: boolean;
  size?: number;
  total?: number;
  number?: number;
}

export interface RequestPaged {
  sort?: Sort;
  page?: Page;
}

export interface PaginationOptions {
  mainElement?: string;
  service: CommonsService;
}
