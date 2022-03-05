import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventDataComponent } from './data.component';

describe('CalendarEventDataComponent', () => {
  let component: CalendarEventDataComponent;
  let fixture: ComponentFixture<CalendarEventDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarEventDataComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
