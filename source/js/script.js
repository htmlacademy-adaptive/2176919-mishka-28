const header = document.querySelector('.main-header__container');
const navMain = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-header__toggle-navigation');
if (header) {
  header.classList.remove('main-header__container--nojs');
}

if (navToggle) {
  navMain.classList.remove('main-navigation--opened');
  navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-navigation--opened');
  });
}

const offerButton = document.querySelector('.special-offer__button');
const modalContainer = document.querySelector('.modal');
const cardButton = document.querySelector('.product-card__button');

if (offerButton) {
  offerButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalContainer.classList.remove('modal--close');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modalContainer.classList.add('modal--close');
    }
  });
}

if (cardButton) {
  cardButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalContainer.classList.remove('modal--close');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      modalContainer.classList.add('modal--close');
    }
  });
}

const map = document.querySelector('.map');

if (map) {
  map.classList.remove('map--nojs');
}
