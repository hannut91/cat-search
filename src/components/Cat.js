import { innerHTML, bind } from '../util/util';

const Cat = (cat, index) => {
  const name = `Cat-${index}`;

  const showCatName = () => {
    alert(cat.title);
  }

  const render = () => {
    const html = `
    <div>${cat.title}</div>

    <img class="cat-img" src="${cat.url}" />
    `;

    innerHTML(name, html);

    bind(name, 'click', showCatName);
  };

  setTimeout(render, 0);

  return `<div id="${name}"></div>`;
};

export default Cat;
