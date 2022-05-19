import { registration } from './js/registration.js';

document.getElementById('js-form').addEventListener('submit', registration);

document.getElementById('js-reload-btn').addEventListener('click', () => {
  document.getElementById('js-form').classList.remove('hide');
  document.getElementById('js-message').classList.remove('show');
})


