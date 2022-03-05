import { Injectable } from '@angular/core';
import { ServiceCredentials } from 'app/interfaces';

@Injectable({
  providedIn: 'root'
})
export abstract class MainHandlingService {
  private serviceCredentials: ServiceCredentials;

  public clearAll() {
    this.serviceCredentials = null;
  }

  public setServiceCredentials(param: ServiceCredentials) {
    this.serviceCredentials = param;
  }

  public getServiceCredentials(): ServiceCredentials {
    return this.serviceCredentials;
  }
}
