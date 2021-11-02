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
      btn.ariaExpanded = 'false';
      header.classList.remove('header_open');
      btn.ariaLabel = 'Открыть меню';
    } else {
      header.classList.add('header_open');
      btn.ariaLabel = 'Закрыть меню';
      btn.ariaExpanded = 'true';
    }
  });
  btnSearch.addEventListener('click', () => {
    if (inputSearch.classList.contains('search__input_open')) {
      inputSearch.classList.remove('search__input_open');
      btnSearch.ariaLabel = 'Открыть поиск';
      btnSearch.ariaExpanded = 'false';
    } else {
      inputSearch.classList.add('search__input_open');
      btnSearch.ariaLabel = 'Закрыть поиск';
      btnSearch.ariaExpanded = 'true';
    }
  });
});