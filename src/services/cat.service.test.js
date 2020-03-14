import { fetchCats } from './cat.service';

describe('getCats', () => {
  it('returns cats', async () => {
    const cats = await fetchCats();

    expect(cats[0].id).toBe(1);
  });
});
