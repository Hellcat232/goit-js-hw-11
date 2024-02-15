import iziToast from 'izitoast';
import { hideLoader } from './render-functions';
import { lightbox } from './render-functions';
import { formEl } from './render-functions';

export function fetchApi() {
  const input = formEl.userInput.value;
  const apiKey = '41249104-77dc8b1e0563744cb8297ef15';

  fetch(
    `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
      input.trim()
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
        formEl.gallery.insertAdjacentHTML('afterbegin', markup);
        lightbox();
        form.reset();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
}
