import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector(".gallery");
const markupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `
  )
  .join("");

  galleryList.insertAdjacentHTML("beforeend", markupGallery);

const options = {
  captionsData: "alt",
  captionDelay: 250,
};
const gallery = new SimpleLightbox(".gallery a", options);


console.log(galleryList);