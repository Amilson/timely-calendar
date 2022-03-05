import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMonthFiltersComponent } from './filters.component';

describe('CalendarMonthFiltersComponent', () => {
  let component: CalendarMonthFiltersComponent;
  let fixture: ComponentFixture<CalendarMonthFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarMonthFiltersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMonthFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
