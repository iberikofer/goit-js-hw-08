import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');

function doMarkup(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
				<a class="gallery__link" href="${original}">
      		<img class="gallery__image" src="${preview}" alt="${description}" />
  			</a>
			</li>
        `;
    })
    .join('');
}

function replaceMarkupToDoc(markupString) {
  galleryList.innerHTML = markupString;
}

replaceMarkupToDoc(doMarkup(galleryItems));

new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});
