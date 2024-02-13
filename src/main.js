import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const userInput = document.querySelector('input');
const div = document.querySelector('.loader');

const showLoader = () => {
  div.style.display = 'block';
};

// const hideLoader = () => {
//   div.style.display = 'none';
// };

form.addEventListener('submit', event => {
  showLoader();
  event.preventDefault(); // Prevent the default form submission behavior
  gallery.innerHTML = '';
  const apiKey = '41249104-77dc8b1e0563744cb8297ef15';
  const input = userInput.value;

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
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: '',
          backgroundColor: '#EF4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        const markup = data.hits
          .map(data => {
            return `<li class="gallery-item"><a href="${data.webformatURL}">
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
        lightbox.on('show.simplelightbox');
        lightbox.refresh();
        form.reset();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      div.style.display = 'none';
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
