
  const state = {
    submenu: document.querySelector('.drop-down__list'),
    mobile: window.matchMedia("(max-width: 768px)"),
    li: document.querySelectorAll('.nav-list__item'),
    nav: document.querySelector('.nav-list'),
  };

  function getListContent() {
    let result = [];
    state.li.forEach(item => {
      result.push(item);
    });
    return result;
  }

  function pushItems(e) {
    if (e.matches) {
      state.submenu.append(...getListContent().slice(3));
      console.log(state.submenu)
    } else {
      state.nav.append(...getListContent().slice(3));
    }
  }

  state.mobile.addEventListener('change', pushItems);
  pushItems(state.mobile);




document.addEventListener('DOMContentLoaded', getListContent);
