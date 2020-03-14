import { searchCat, clearSearchText, getSearchText, subscribe } from '../store';
import { innerHTML, bind } from '../util/util';

import SearchInput from './SearchInput';

const Search = () => {
  const name = 'Search';

  const submit = (e) => {
    e.preventDefault();

    const text = getSearchText();
    searchCat(text);
  }

  const clear = () => clearSearchText();

  const render = () => {
    const html = `
    <form id="search-form">
      <div class="search-wrap">
        ${SearchInput()}
        <button class="clear-btn" id="clear-btn" type="button">X</button>
      </div>
      <button type="submit">검색</button>
    </form>
    `;

    innerHTML(name, html);

    bind('search-form', 'submit', submit);
    bind('clear-btn', 'click', clear);
  }

  subscribe(name, 'searchText', render);

  setTimeout(render, 0);

  return `<div class="wrapper" id="${name}"></div>`;
}

export default Search;
