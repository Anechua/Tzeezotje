const header = document.querySelector('.header__container');
const menu = header.querySelector('.menu');
const menuToggle = header.querySelector('.menu__toggle');
const iconOpen = header.querySelector('.menu__icon-open');
const iconClose = header.querySelector('.menu__icon-close');

const toggleMenu = () => {
  if (menu.classList.contains('menu--opened')) {
    menu.classList.remove('menu--opened');
    menu.classList.add('menu--closed');
    iconClose.style.display = 'none';
    iconOpen.style.display = 'block';
    menuToggle.setAttribute('aria-label', 'Open menu');
  } else {
    menu.classList.add('menu--opened');
    menu.classList.remove('menu--closed');
    iconClose.style.display = 'block';
    iconOpen.style.display = 'none';
    menuToggle.setAttribute('aria-label', 'Close menu');
  }
}

const renderMenu = () => {
  header.classList.remove('header__container--nojs');
  menu.classList.remove('menu--nojs');
  menu.classList.add('menu--closed');

  menuToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleMenu();
  })
}

export {renderMenu};
