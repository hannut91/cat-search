export const getValue = (id) => {
  const el = document.getElementById(id);
  if (!el) {
    return;
  }

  return el.value;
}

export const innerHTML = (id, html) => {
  const el = document.getElementById(id);
  if (!el) {
    return;
  }

  el.innerHTML = html;
}

export const bind = (id, event, action) => {
  const el = document.getElementById(id);
  if (!el) {
    return;
  }

  el.addEventListener(event, action);
};
