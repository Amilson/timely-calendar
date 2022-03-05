/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-spread */
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'shared-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line implicit-arrow-linebreak
      // eslint-disable-next-line arrow-body-style
      useExisting: forwardRef(() => SharedDateRangePickerComponent),
      multi: true
    }
  ]
})
export class SharedDateRangePickerComponent implements ControlValueAccessor, OnInit {
  @Input() moveDaysForward = true;

  @Input()
  set minDate(value: any) {
    this._minDate = !this.moveDaysForward ? null : value;
  }

  @Output() onChange = new EventEmitter<any>();

  private today = moment().format('YYYY-MM-DD');

  private onModelChange = (value: any) => {};

  private onModelTouched = (value: any) => {};

  public _dateFirst = moment();

  public _dateSecond = moment().add(1, 'M');

  public _daysArrFirst = [];

  public _daysArrSecond = [];

  public _dateForm: FormGroup;

  public _disabled: boolean = false;

  public _minDate = null;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.initDateRange();
  }

  private initDateRange() {
    this._dateForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

  private createCalendar(month: any) {
    const firstDay = moment(month).startOf('M');
    const lastDay = moment(month).endOf('M');

    const days = Array.apply(null, {
      length: month.daysInMonth()
    })
      .map(Number.call, Number)
      .map((n: number) => {
        return moment(firstDay).add(n, 'd');
      });

    let n = 0;
    while (n < firstDay.weekday()) {
      days.unshift(null);
      n += 1;
    }
    n = 0;
    while (n < 7 - lastDay.weekday()) {
      days.push(null);
      n += 1;
    }

    let index = 1;
    let group = [];
    const grouped = [];

    Object.entries(days).map(([key, value]: [string, any]) => {
      if (index > 7) {
        index = 1;
        grouped.push(group);
        group = [];
      }

      group.push(value);
      index += 1;
      return null;
    });
    grouped.push(group);

    return grouped;
  }

  private build() {
    this._daysArrFirst = this.createCalendar(this._dateFirst);
    this._daysArrSecond = this.createCalendar(this._dateSecond);
  }

  private clearDates() {
    if (this._disabled) return;
    this._dateForm.setValue({
      startDate: null,
      endDate: null
    });
    this.writeValue(this._dateForm.value);
  }

  navigateToToday() {
    this._dateFirst = moment();
    this._dateSecond = moment().add(1, 'M');
    this.build();
  }

  ngOnInit() {
    this.build();
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  @Input()
  set value(value: any) {
    if (
      value &&
      Object.prototype.hasOwnProperty.call(value, 'startDate') &&
      Object.prototype.hasOwnProperty.call(value, 'endDate')
    ) {
      this._dateForm.setValue(value);
      this.cdr.detectChanges();
      this.onModelChange(this._dateForm.value);
      this.onModelTouched(this._dateForm.value);
    } else {
      this.clearDates();
    }
  }

  get value(): any {
    return this._dateForm.value;
  }

  writeValue(value: any): void {
    this.value = value;
    this.onChange.next(value);
  }

  nextMonth() {
    if (this._disabled) return;
    this._dateFirst.add(1, 'M');
    this._dateSecond.add(1, 'M');

    this._daysArrFirst = this.createCalendar(this._dateFirst);
    this._daysArrSecond = this.createCalendar(this._dateSecond);
  }

  previousMonth() {
    if (this._disabled) return;
    this._dateFirst.subtract(1, 'M');
    this._dateSecond.subtract(1, 'M');

    this._daysArrFirst = this.createCalendar(this._dateFirst);
    this._daysArrSecond = this.createCalendar(this._dateSecond);
  }

  isToday(day: any) {
    if (!day) {
      return false;
    }

    return moment().format('L') === day.format('L');
  }

  isSelected(day: any) {
    if (!day) {
      return false;
    }

    const startDateMoment = moment(this._dateForm.value.startDate, 'YYYY-MM-DD');
    const endDateMoment = moment(this._dateForm.value.endDate, 'YYYY-MM-DD');

    if (this._dateForm.valid) {
      return startDateMoment.isSameOrBefore(day) && endDateMoment.isSameOrAfter(day);
    }

    if (this._dateForm.get('startDate').valid) {
      return startDateMoment.isSame(day);
    }

    return false;
  }

  isDisabled(day) {
    const { _minDate } = this;
    if (_minDate) {
      const firstDay = moment(_minDate);
      return day.isBefore(firstDay.subtract(1, 'day'));
    }
    return false;
  }

  isFirstSelected(day) {
    if (!day) return false;
    const { _dateForm } = this;
    const { startDate } = _dateForm.value;
    return day.isSame(startDate);
  }

  isLastSelected(day: any) {
    if (!day) return false;
    const { _dateForm } = this;
    const { endDate } = _dateForm.value;
    return day.isSame(endDate);
  }

  onHandleSelectedDate(day: any) {
    if (this._disabled) return;
    const { _dateForm, _minDate } = this;
    const dayFormatted = day.format('YYYY-MM-DD');

    if (_minDate) {
      const firstDay = moment(_minDate);
      if (day.isBefore(firstDay.subtract(1, 'day'))) return;
    }

    if (_dateForm.valid) {
      this.clearDates();
    }

    let { startDate, endDate } = _dateForm.value;
    if (startDate) {
      if (moment(startDate).isAfter(moment(dayFormatted))) {
        endDate = startDate;
        startDate = dayFormatted;
      } else {
        endDate = dayFormatted;
      }
    } else startDate = dayFormatted;

    if (startDate) {
      _dateForm.get('startDate').patchValue(startDate);
    }

    if (endDate) {
      _dateForm.get('endDate').patchValue(endDate);
    }
    this.writeValue(_dateForm.value);
  }

  selectRangeOfDays(days: number) {
    if (this._disabled) return;
    const { _dateForm, _minDate, today, moveDaysForward } = this;
    const { startDate } = _dateForm.value;

    const firstDay = moment(startDate || _minDate || today).format('YYYY-MM-DD');
    const method = moveDaysForward ? 'add' : 'subtract';
    const lastDay = moment(firstDay)
      // eslint-disable-next-line no-unexpected-multiline
      [method](days, 'day')
      .format('YYYY-MM-DD');

    if (moveDaysForward) {
      _dateForm.get('startDate').patchValue(firstDay);
      _dateForm.get('endDate').patchValue(lastDay);
    } else {
      _dateForm.get('startDate').patchValue(lastDay);
      _dateForm.get('endDate').patchValue(firstDay);
    }
    this.writeValue(_dateForm.value);
  }
}
