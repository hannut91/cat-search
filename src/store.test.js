import { getCats, getSearchText, onSearchChange, clearSearchText } from './store';

describe('getCats', () => {
  it('returns cats', () => {
    const cats = getCats();

    expect(cats.length).toBe(0);
  });
});

describe('getSearchText', () => {
  it('returns search text', () => {
    const text = getSearchText();

    expect(text).toBe('');
  });
});

describe('onSearchChange', () => {
  const value = 'value';

  it('updates the search text', () => {
    onSearchChange(value);

    const text = getSearchText();

    expect(text).toBe(value);
  });
});

describe('clearSearchText', () => {
  const value = 'value';

  it('clears the search text', () => {
    onSearchChange(value);

    clearSearchText();

    const text = getSearchText();

    expect(text).toBe('');
  });
});
