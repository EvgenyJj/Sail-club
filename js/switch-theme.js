let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');

darkThemeButton.onclick = function () {
   document.body.classList.add('dark');
   darkThemeButton.classList.add('active');
   lightThemeButton.classList.remove('active');
};

lightThemeButton.onclick = function () {
   document.body.classList.remove('dark');
   darkThemeButton.classList.remove('active');
   lightThemeButton.classList.add('active');
};

sansSerifFontButton.onclick = function () {
   document.body.classList.remove('serif');
   sansSerifFontButton.classList.add('active');
   serifFontButton.classList.remove('active');
};

serifFontButton.onclick = function () {
   document.body.classList.add('serif');
   sansSerifFontButton.classList.remove('active');
   serifFontButton.classList.add('active');
};