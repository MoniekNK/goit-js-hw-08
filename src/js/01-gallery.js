import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

function createGalleryElement(item) {
  const imgElement = document.createElement('img');
  imgElement.classList.add('gallery__image');
  imgElement.setAttribute('src', item.preview);
  imgElement.setAttribute('alt', item.description);
  const linkElement = document.createElement('a');
  linkElement.prepend(imgElement);
  linkElement.classList.add('gallery__item');
  linkElement.setAttribute('href', item.original);
  const listElement = document.createElement('li');
  listElement.prepend(linkElement);
  return listElement;
}
const galleryMarkup = galleryItems.map(picture =>
  createGalleryElement(picture)
);
const gallery = document.querySelector('.gallery');
gallery.prepend(...galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
