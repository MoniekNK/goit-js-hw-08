import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items'; // Upewnij się, że masz odpowiednią ścieżkę do pliku z galerią

const galleryList = document.querySelector('.gallery');
const galleryHTML = galleryItems
  .map(
    item => `<li>
        <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      </li>`
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryHTML);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
