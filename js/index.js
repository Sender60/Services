import { initSwiperIfSmallScreen } from './swiper.js';

const showBrandsButton = document.querySelector('.brands__read-button');
const brandsList = document.querySelector('.brands__list');
const text = showBrandsButton.querySelector('span');
const buttonArrowIcon = showBrandsButton.querySelector('img');

showBrandsButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (text.textContent === 'Показать все') {
    text.textContent = 'Скрыть';
    brandsList.classList.add('brands__list--visible');
    buttonArrowIcon.style.transform = 'rotate(180deg)';
  } else {
    text.textContent = 'Показать все';
    brandsList.classList.remove('brands__list--visible');
    buttonArrowIcon.style.transform = 'rotate(0deg)';
  }
});

window.addEventListener('load', initSwiperIfSmallScreen);
window.addEventListener('resize', initSwiperIfSmallScreen);
