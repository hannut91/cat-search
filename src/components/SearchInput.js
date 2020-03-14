import { innerHTML, bind } from '../util/util';
import { getSearchText, subscribe, onSearchChange } from '../store';

const SearchInput = () => {
  const name = 'SearchInput';

  const changeSearchText = (e) => onSearchChange(e.target.value);

  const render = async () => {
    const html = `
    <input class="search-input"
           id="search-text"
           value="${getSearchText()}"
           type="text" />
    `;

    innerHTML(name, html);

    bind('search-text', 'input', changeSearchText);
  }

  subscribe(name, 'searchText', render);

  setTimeout(render, 0);

  return `<div class="wrapper" id="${name}"></div>`;
}

export default SearchInput;
