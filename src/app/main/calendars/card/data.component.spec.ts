import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsCardDataComponent } from './data.component';

describe('CalendarsCardDataComponent', () => {
  let component: CalendarsCardDataComponent;
  let fixture: ComponentFixture<CalendarsCardDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarsCardDataComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsCardDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
