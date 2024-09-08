import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

// const showBrandsButton = document.querySelector('.read-button');
// const brandsList = document.querySelector('.brands__list');
// const repairsList = document.querySelector('.repairs__list');
// const text = showBrandsButton.querySelector('span');
// const buttonArrowIcon = showBrandsButton.querySelector('img');

// const sectionBrands = document.getElementById('brand-slider');
// const sectionBrandsList = sectionBrands.querySelector('ul');
// const paginationBrands = sectionBrands.querySelector('.swiper-pagination--brand-slider');

const sectionRepairs = document.getElementById('repair-slider');
const sectionRepairsList = sectionRepairs.querySelector('ul');
const paginationRepairs = sectionRepairs.querySelector('.swiper-pagination--repair-slider');

// const sectionPrices = document.getElementById('prices-slider');
// const sectionPricesList = sectionPrices.querySelector('ul');
// const paginationPrices = sectionPrices.querySelector('.swiper-pagination--price-slider');

let swiperInstance = {};

// export function initSwiperIfSmallScreen() {
//   if (window.innerWidth <= 768) {
//     if (!swiperInstance) {
//       sectionBrands.classList.add('brand-slider', 'swiper');
//       sectionBrandsList.classList.add('swiper-wrapper');
//       sectionBrandsList.classList.remove('brands__list');
//       brandsList.classList.remove('brands__list--visible');
//       paginationBrands.style.display = 'block';

//       swiperInstance = new Swiper('.brand-slider', {
//         pagination: {
//           el: '.swiper-pagination--brand',
//           clickable: true,
//         },
//         spaceBetween: 10,
//         slidesPerView: 1.3,
//       });
//     }
//   } else {
//     if (swiperInstance) {
//       swiperInstance.destroy();
//       swiperInstance = null;
//     }
//     sectionBrands.classList.remove('brand-slider', 'swiper');
//     sectionBrandsList.classList.remove('swiper-wrapper');
//     sectionBrandsList.classList.add('brands__list');
//     paginationBrands.style.display = 'none';

//     text.textContent = 'Показать все';
//     buttonArrowIcon.style.transform = 'rotate(0deg)';
//   }
// }

function toggleClassSwiper() {
  if (window.innerWidth <= 768) {
    // sectionBrands.classList.add('brand-slider', 'swiper');
    // sectionBrandsList.classList.add('swiper-wrapper');
    // sectionBrandsList.classList.remove('brands__list');
    // paginationBrands.style.display = 'block';

    sectionRepairs.classList.add('repair-slider', 'swiper');
    sectionRepairsList.classList.add('swiper-wrapper');
    sectionRepairsList.classList.remove('repairs__list');
    paginationRepairs.style.display = 'block';
  } else {
    // sectionBrands.classList.remove('brand-slider', 'swiper');
    // sectionBrandsList.classList.remove('swiper-wrapper');
    // sectionBrandsList.classList.add('brands__list');
    // paginationBrands.style.display = 'none';

    sectionRepairs.classList.remove('repair-slider', 'swiper');
    sectionRepairsList.classList.remove('swiper-wrapper');
    sectionRepairsList.classList.add('repairs__list');
    paginationRepairs.style.display = 'none';
  }
}

export function initSwiperIfSmallScreen(className) {
  if (window.innerWidth <= 768) {
    if (!swiperInstance[className]) {
      toggleClassSwiper();

      swiperInstance[className] = new Swiper(`.${className}`, {
        pagination: {
          el: `.swiper-pagination--${className}`,
          clickable: true,
        },
        spaceBetween: 10,
        slidesPerView: 1.3,
      });
    }
  } else {
    if (swiperInstance[className]) {
      swiperInstance[className].destroy();
      delete swiperInstance[className];
    }
    toggleClassSwiper();
  }
}
