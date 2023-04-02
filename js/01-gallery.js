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
    const {target} = evt;
    if (!target.classList.contains('gallery_image')) {
        return
    }

    const original = target.dataset.source;
    const description = target.alt;
    const modal = basicLightbox.create (
        `<img
            class="modal__image"
            src="${original}"
            alt="${description}"
            />`
    )


modal.show();

if(modal.visible()) {
    window.addEventListener('keydown', pushKeyDown);
}

function pushKeyDown(evt) {
 if(evt.keyCode === 27) {
    modal.close();
    window.removeEventListener('keydown', pushKeyDown);
 }
}
}