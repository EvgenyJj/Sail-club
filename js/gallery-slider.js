let activePhoto = document.querySelector('.active-photo');
let previewPhotos = document.querySelectorAll('.slider-preview a');

for (let previewPhoto of previewPhotos) {
   previewPhoto.onclick = function (evt) {
      evt.preventDefault();
      activePhoto.src = previewPhoto.href;
      let currentActivePhoto = document.querySelector('.slider-preview .active-preview');
      currentActivePhoto.classList.remove('active-preview');
      previewPhoto.classList.add('active-preview');
   };
};