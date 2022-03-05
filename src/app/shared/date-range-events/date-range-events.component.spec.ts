import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDateRangeEventsComponent } from './date-range-events.component';

describe('SharedDateRangeEventsComponent', () => {
  let component: SharedDateRangeEventsComponent;
  let fixture: ComponentFixture<SharedDateRangeEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedDateRangeEventsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDateRangeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
