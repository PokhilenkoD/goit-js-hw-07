import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryParentEl = document.querySelector('.gallery');

const murkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
      </li>`
  )
  .join('');

galleryParentEl.insertAdjacentHTML('beforeend', murkup);

galleryParentEl.addEventListener('click', onClickGalleryElements);

function onClickGalleryElements(event) {
  event.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
