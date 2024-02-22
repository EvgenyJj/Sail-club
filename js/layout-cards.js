let cardsGridButton = document.querySelector('.card-view-button-grid');
let cardsListButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

cardsGridButton.onclick = function () {
   cards.classList.remove('list')
   cardsGridButton.classList.add('active');
   cardsListButton.classList.remove('active');
};

cardsListButton.onclick = function () {
   cards.classList.add('list');
   cardsGridButton.classList.remove('active');
   cardsListButton.classList.add('active');
};