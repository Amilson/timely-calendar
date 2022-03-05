import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarFiltersComponent } from './filters.component';

describe('CalendarFiltersComponent', () => {
  let component: CalendarFiltersComponent;
  let fixture: ComponentFixture<CalendarFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarFiltersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
