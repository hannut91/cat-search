import { getCats, subscribe } from '../store';
import { innerHTML } from '../util/util';

import Cat from './Cat';

const Cats = () => {
  const name = 'Cats';

  const render = () => {
    const cats = getCats();
    const html = cats.map((it, index) => `
      ${Cat(it, index)}
    `).join('');

    innerHTML(name, html)
  }

  subscribe(name, 'cats', render);

  setTimeout(render, 0);

  return `<div class="wrapper" id="${name}"></div>`;
};

export default Cats;
