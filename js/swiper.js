import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const showBrandsButton = document.querySelector('.brands__read-button');
const brandsList = document.querySelector('.brands__list');
const text = showBrandsButton.querySelector('span');
const buttonArrowIcon = showBrandsButton.querySelector('img');
const section = document.getElementById('brand-slider');
const sectionList = section.querySelector('ul');
const pagination = section.querySelector('.swiper-pagination');

let swiperInstance;

export function initSwiperIfSmallScreen() {
  if (window.innerWidth <= 768) {
    if (!swiperInstance) {
      section.classList.add('brand-slider', 'swiper');
      sectionList.classList.add('swiper-wrapper');
      sectionList.classList.remove('brands__list');
      brandsList.classList.remove('brands__list--visible');
      pagination.style.display = 'block';

      swiperInstance = new Swiper('.brand-slider', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 10,
        slidesPerView: 1.3,
      });
    }
  } else {
    swiperInstance.destroy();

    section.classList.remove('brand-slider', 'swiper');
    sectionList.classList.remove('swiper-wrapper');
    sectionList.classList.add('brands__list');
    pagination.style.display = 'none';

    text.textContent = 'Показать все';
    buttonArrowIcon.style.transform = 'rotate(0deg)';

    swiperInstance = null;
  }
}
