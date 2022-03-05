import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDateRangePickerComponent } from './date-range-picker.component';

describe('SharedDateRangePickerComponent', () => {
  let component: SharedDateRangePickerComponent;
  let fixture: ComponentFixture<SharedDateRangePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedDateRangePickerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
