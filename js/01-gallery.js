import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const markupGallery = createMarkupGallery(galleryItems);


function createMarkupGallery(galleryArray) {
  return galleryArray
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}" />
  </a>
</li>`;
    })
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", markupGallery);
galleryList.addEventListener("click", clickImage);

function clickImage(evt) {
  evt.preventDefault();
  const { target } = evt;
  if (!target.dataset.source) {
    return;
  }
  const modal = basicLightbox.create(
    ` <img src="${target.dataset.source}" width="1280" height="auto">`,
    {
      onShow: (modal) => {
        window.addEventListener("keydown", exitEscape);
      },
      onClose: (modal) => {
        window.removeEventListener("keydown", exitEscape);
      },
    }
  );
  function exitEscape(evt) {
    if (evt.code === "Escape") {
        modal.close();
    }
  }
  modal.show();
}