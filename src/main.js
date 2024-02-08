import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);

function searchPhoto(userValue) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '10232217-e697c3d56777d20dc0cbe8fb5';
  const PARAMS = `?key=${API_KEY}"&q="${encodeURIComponent(
    userValue
  )}&image_type="photo"&orientation="horizontal"&safesearch="true"`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}
