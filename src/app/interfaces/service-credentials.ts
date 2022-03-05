import { RequestLoadingInProgress, RequestPaged } from '.';

interface ServiceHttpResponseCredentials {
  httpCodeIgnore?: number[];
  httpCodeIgnoreRedirect?: number[];
}

export interface ServiceCredentials {
  httpResponse?: ServiceHttpResponseCredentials;
  requestInProgress?: RequestLoadingInProgress;
  requestPaged?: RequestPaged;
}
