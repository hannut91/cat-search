import { fetchCats } from "./services/cat.service";

const state = {
  searchText: {
    data: '',
    listeners: {},
  },
  cats: {
    data: [],
    listeners: {},
  },
  isHidden: {
    data: false,
    listeners: {},
  }
};

export const subscribe = (component, name, action) => {
  state[name].listeners[component] = action;
}

export const getCats = () => state.cats.data;

export const getSearchText = () => state.searchText.data;

export const onSearchChange = (value) => {
  state.searchText.data = value;
}

export const searchCat = async (text) => {
  state.cats.data = await fetchCats();

  publish(state.cats);
}

export const clearSearchText = () => {
  state.searchText.data = '';

  publish(state.searchText);
}

export const getIsHidden = () => state.isHidden.data;

export const filterToggle = () => {
  state.isHidden.data = !state.isHidden.data;

  publish(state.isHidden);
}

export default state;

const publish = (data) =>
  Object.values(data.listeners)
    .forEach(action => action(data.data));
