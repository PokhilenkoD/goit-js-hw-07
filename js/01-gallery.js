import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryParentEl = document.querySelector('.gallery');

const murkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  )
  .join('');

galleryParentEl.insertAdjacentHTML('beforeend', murkup);

galleryParentEl.addEventListener('click', onClickGalleryElements);

function onClickGalleryElements(event) {
  event.preventDefault();
  event.target.src = event.target.dataset.source;
  const instance = basicLightbox.create(`
        <img
          class="closeModal"
          src="${event.target.src}"
          alt="${event.target.alt}"
        />
    `);

  instance.show();

  galleryParentEl.addEventListener('keydown', onCloseModalKey);
  function onCloseModalKey(ev) {
    if (ev.key === 'Escape') {
      instance.close();
      galleryParentEl.removeEventListener('keydown', onCloseModalKey);
    }
  }
}
