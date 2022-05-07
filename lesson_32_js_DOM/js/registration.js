const toggleError = (id, error) => {
  const element = document.getElementById(id);
  error ? element.classList.add('error') : element.classList.remove('error');
}


const registration = (event) => {
  event.preventDefault();
  const form = new FormData(event.target),
    email = form.get('email'),
    firstName = form.get('firstName'),
    password = form.get('password'),
    RepeatPassword = form.get('RepeatPassword');

  toggleError('js-registration-form-firstName', !firstName);
  toggleError('js-registration-form-email', !email);
  if (password.length >= 5) {
    toggleError('js-registration-form-password', !password);
  } else {
    toggleError('js-registration-form-password', password);
    alert('password must be longer than 5 characters')
  }
  if (RepeatPassword.length >= 5) {
    toggleError('js-registration-form-RepeatPassword', !RepeatPassword);
  } else {
    // alert('password must be longer than 5 characters')
    toggleError('js-registration-form-RepeatPassword', RepeatPassword);
  }

}


export { registration };