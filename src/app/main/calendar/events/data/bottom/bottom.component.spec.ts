import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventDataBottomComponent } from './bottom.component';

describe('CalendarEventDataBottomComponent', () => {
  let component: CalendarEventDataBottomComponent;
  let fixture: ComponentFixture<CalendarEventDataBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarEventDataBottomComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventDataBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
