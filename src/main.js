import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const userInput = document.querySelector('input');
const div = document.querySelector('.div');

const showLoader = () => {
  const loader = document.createElement('span');
  loader.classList.add('loader');
  div.append(loader);
};

const hideLoader = () => {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';
  const apiKey = '41249104-77dc8b1e0563744cb8297ef15';
  const input = userInput.value;
  showLoader();
  fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
      input
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(userData => {
      if (userData.hits.length === 0) {
        iziToast.error({
          title: '',
          backgroundColor: '#EF4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        const markup = userData.hits
          .map(data => {
            return `<li class="gallery-item"><a href="${data.largeImageURL}">
          <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
          <p><b>Likes: </b>${data.likes}</p>
          <p><b>Views: </b>${data.views}</p>
          <p><b>Comments: </b>${data.comments}</p>
          <p><b>Downloads: </b>${data.downloads}</p>
          </li>`;
          })
          .join('');
        gallery.insertAdjacentHTML('afterbegin', markup);
        const lightbox = new SimpleLightbox('.gallery a', options);
        lightbox.refresh();
        form.reset();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});

const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};
