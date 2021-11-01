document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const btn = document.querySelector('.menu-btn');
  const btnSearch = document.querySelector('.search__button');
  const inputSearch = document.querySelector('.search__input');
  btn.addEventListener('click', () => {
    if(header.classList.contains('header_open')) {
      if (inputSearch.classList.contains('search__input_open')) {
        inputSearch.classList.remove('search__input_open');
      }
      header.classList.remove('header_open');
    } else {
      header.classList.add('header_open');
    }
  });
  btnSearch.addEventListener('click', () => {
    if (inputSearch.classList.contains('search__input_open')) {
      inputSearch.classList.remove('search__input_open');
    } else {
      inputSearch.classList.add('search__input_open');
    }
  });
});