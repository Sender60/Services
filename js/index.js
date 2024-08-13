const showBrendsButton = document.querySelector('.brends__read-button');
const brendsList = document.querySelector('.brends__list');

showBrendsButton.addEventListener('click', () => {
  const text = showBrendsButton.querySelector('h4');

  if (text.textContent === 'Показать все') {
    text.textContent = 'Скрыть';
    brendsList.style.overflow = 'visible';
    brendsList.style.height = 'auto';
  } else {
    text.textContent = 'Показать все';
    brendsList.style.overflow = 'hidden';
    brendsList.style.height = '165px';
  }
});
