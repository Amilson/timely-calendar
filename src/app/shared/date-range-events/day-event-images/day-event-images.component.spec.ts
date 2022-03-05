import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEventImagesComponent } from './day-event-images.component';

describe('CalendarEventImagesComponent', () => {
  let component: CalendarEventImagesComponent;
  let fixture: ComponentFixture<CalendarEventImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarEventImagesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarEventImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
