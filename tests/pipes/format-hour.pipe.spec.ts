import { FormatHourPipe } from 'app/core/pipes/format-hour.pipe';

describe('FormatHourPipe', () => {
  const pipe = new FormatHourPipe();

  it('transforms "" to ""', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('transforms 2021-09-17 09:00:00 to 09:00:00', () => {
    expect(pipe.transform('2021-09-17 09:00:00')).toBe('9:00 am');
  });
});
