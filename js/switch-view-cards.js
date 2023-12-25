let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');

gridViewButton.addEventListener ('click', () => {
   cardsList.classList.remove('list');
   listViewButton.classList.remove('active');
   gridViewButton.classList.add('active');
});

listViewButton.addEventListener ('click', () => {
   cardsList.classList.add('list');
   gridViewButton.classList.remove('active');
   listViewButton.classList.add('active');
});