import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarResumeComponent } from './resume.component';

describe('CalendarResumeComponent', () => {
  let component: CalendarResumeComponent;
  let fixture: ComponentFixture<CalendarResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarResumeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
