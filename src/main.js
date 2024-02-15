import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { showLoader } from './js/render-functions';
import { fetchApi } from './js/pixabay-api';
import { formEl } from './js/render-functions';

formEl.form.addEventListener('submit', event => {
  event.preventDefault();
  formEl.gallery.innerHTML = '';
  showLoader();
  fetchApi();
});
