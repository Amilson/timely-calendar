import { Injectable } from '@angular/core';
import { CommonsService } from 'app/core/services/commons';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedProgressBarService extends CommonsService {
  private visible: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    super();
  }

  show() {
    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }

  visibleConfig(): Observable<any> {
    return this.visible.asObservable();
  }
}
