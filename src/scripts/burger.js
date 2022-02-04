document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const btn = document.querySelector('.menu-btn');

  btn.addEventListener('click', () => {
    if(header.classList.contains('header_open')) {
      btn.ariaExpanded = 'false';
      header.classList.remove('header_open');
      btn.ariaLabel = 'Открыть меню';
    } else {
      header.classList.add('header_open');
      btn.ariaLabel = 'Закрыть меню';
      btn.ariaExpanded = 'true';
    }
  });
});