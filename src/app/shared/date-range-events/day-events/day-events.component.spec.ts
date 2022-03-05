import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDateRangeDayEventsComponent } from './day-events.component';

describe('SharedDateRangeDayEventsComponent', () => {
  let component: SharedDateRangeDayEventsComponent;
  let fixture: ComponentFixture<SharedDateRangeDayEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedDateRangeDayEventsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDateRangeDayEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
