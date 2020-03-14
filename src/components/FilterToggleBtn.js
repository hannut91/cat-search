import { subscribe, getIsHidden, filterToggle } from '../store';
import { bind, innerHTML } from "../util/util";

const FilterToggleBtn = () => {
  name = 'FilterToggleBtn';

  const toggle = () => filterToggle();

  const render = () => {
    const isHidden = getIsHidden();

    const html = `
      <button id="toggle-btn" type="button">
        ${isHidden ? '필터보기' : '필터가리기'}
      </button>
    `;

    innerHTML(name, html);

    bind('toggle-btn', 'click', toggle);
  }

  subscribe(name, 'isHidden', render);

  setTimeout(render, 0);

  return `<div class="wrapper" id=${name}></div>`;
};

export default FilterToggleBtn;