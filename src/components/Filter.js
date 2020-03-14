import { innerHTML } from '../util/util';
import FilterToggleBtn from './FilterToggleBtn';
import { getIsHidden, subscribe } from '../store';

const Filter = () => {
  const name = 'Filter';

  const render = () => {
    const isHidden = getIsHidden();

    const html = `
      ${FilterToggleBtn()}
      <div ${isHidden ? 'hidden' : ''}>
        <input type="checkbox" /> 고양이
        <input type="checkbox" /> 강아지
        <input type="checkbox" /> 양
        <input type="checkbox" /> 사자
      </div>
    `

    innerHTML(name, html);
  };

  subscribe(name, 'isHidden', render);

  setTimeout(render, 0);

  return `<div id=${name}></div>`;
}

export default Filter;
