import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markupGallery = galleryItems.map(({preview, original, description}) =>  
    `
    <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
).join('');

gallery.insertAdjacentHTML('beforeend', markupGallery);

gallery.addEventListener('click', onClickImage);

function onClickImage(evt) {
    evt.preventDefault();
    

}