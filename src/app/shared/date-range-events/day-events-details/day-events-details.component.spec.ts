import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDateRangeDayEventsDetailsComponent } from './day-events-details.component';

describe('SharedDateRangeDayEventsDetailsComponent', () => {
  let component: SharedDateRangeDayEventsDetailsComponent;
  let fixture: ComponentFixture<SharedDateRangeDayEventsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedDateRangeDayEventsDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDateRangeDayEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
