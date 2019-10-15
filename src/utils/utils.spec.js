import { capitaliseFirstLetter, formatDate } from './utils';

describe('capitaliseFirstLetter', () => {
  it('returns empty string when passed empty string', () => {
    expect(capitaliseFirstLetter('')).toBe('');
  });
  it('returns string back to user when first letter already capitalised', () => {
    expect(capitaliseFirstLetter('Brother')).toBe('Brother');
  });
  it('capitalises the first letter (only) in a passed string', () => {
    expect(capitaliseFirstLetter('yo dude')).toBe('Yo dude');
  });
  it('maintains functionality for longer strings', () => {
    expect(
      capitaliseFirstLetter(
        'hello my name is Liam and I am sitting next to Patrick'
      )
    ).toBe('Hello my name is Liam and I am sitting next to Patrick');
  });
});

describe('formatDate', () => {
  it('returns an empty string when passed empty string', () => {
    expect(formatDate('')).toBe('');
  });
  it('formats a passed date to include the year', () => {
    expect(formatDate('2018-05-30T15:59:13.341Z')).toMatch(/2018/);
  });
  it('formats a passed date to include the day and month', () => {
    expect(formatDate('2018-05-30T15:59:13.341Z')).toMatch(/May 30/);
  });
});
