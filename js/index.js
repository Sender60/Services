import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

let swiperInstance;
const showBrendsButton = document.querySelector('.brends__read-button');
const brendsList = document.querySelector('.brends__list');
const text = showBrendsButton.querySelector('h4');
const buttonArrowIcon = showBrendsButton.querySelector('img');

showBrendsButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (text.textContent === 'Показать все') {
    text.textContent = 'Скрыть';
    brendsList.style.overflow = 'visible';
    brendsList.style.height = 'auto';
    buttonArrowIcon.style.transform = 'rotate(180deg)';
  } else {
    text.textContent = 'Показать все';
    brendsList.style.overflow = 'hidden';
    brendsList.style.height = '165px';
    buttonArrowIcon.style.transform = 'rotate(0deg)';
  }
});

function initSwiperIfSmallScreen() {
  const section = document.getElementById('brend-slider');
  const sectionList = section.querySelector('ul');
  const pagination = section.querySelector('.swiper-pagination');

  if (window.innerWidth <= 768) {
    if (!swiperInstance) {
      section.classList.add('brend-slider', 'swiper');
      sectionList.classList.add('swiper-wrapper');
      sectionList.classList.remove('brends__list');
      brendsList.style.overflow = 'visible';
      pagination.style.display = 'block';

      swiperInstance = new Swiper('.brend-slider', {
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

    section.classList.remove('brend-slider', 'swiper');
    sectionList.classList.remove('swiper-wrapper');
    sectionList.classList.add('brends__list');
    pagination.style.display = 'none';

    text.textContent = 'Показать все';
    buttonArrowIcon.style.transform = 'rotate(0deg)';

    swiperInstance = null;
  }
}

window.addEventListener('load', initSwiperIfSmallScreen);
window.addEventListener('resize', initSwiperIfSmallScreen);
