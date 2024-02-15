import SimpleLightbox from 'simplelightbox';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const userInput = document.querySelector('input');
const div = document.querySelector('.div');

export const formEl = {
  form,
  gallery,
  userInput,
  div,
};

export const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  formEl.div.append(loader);
};

export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
};

export function lightbox() {
  const lightbox = new SimpleLightbox('.gallery a', options);
  lightbox.refresh();
}
const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};
