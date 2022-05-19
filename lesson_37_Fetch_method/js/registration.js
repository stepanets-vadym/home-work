// *Функція додавання класу error до не коректних інпутів
const toggleError = (id, error) => {
  const element = document.getElementById(id);
  error ? element.classList.add('error') : element.classList.remove('error');
};
// *Валідація поля Еmail
const validateEmail = (email) => {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
// *Функція додавання класу, тексту попередження до не коректних інпутів
const errorInputMessage = (id, errorText) => {
  const errorBlock = document.getElementById(id);
  errorBlock.innerText = errorText;
};
// *Функція переверки валідності форми
const validateInput = (name, id, errorName, Text) => {
  if (!name) {
    toggleError(id, !name);
    errorInputMessage(errorName, Text);
    console.log('fsdfsdf');
    return true;
  } else {
    toggleError(id, !name);
    errorInputMessage(errorName, '');
  }
};

const registration = (event) => {
  event.preventDefault();

  const form = new FormData(event.target),
    firstName = form.get('firstName'),
    lastName = form.get('lastName'),
    email = form.get('email'),
    username = form.get('username'),
    password = form.get('password'),
    // checkbox = form.get('checkbox'),
    language = form.get('language'),
    checkboxChecked = !!form.get('seasonAnimation'),
    emailError = document.getElementById('js-registration-form-email'),
    passwordError = document.getElementById('js-registration-form-password');

  // перевірка валідності firstName
  if (
    validateInput(
      firstName,
      'js-registration-form-firstName',
      'firstName-error',
      'Ви не заповнили поле'
    )
  )
    return;

  // перевірка валідності lastName
  if (
    validateInput(
      lastName,
      'js-registration-form-lastName',
      'lastName-error',
      'Ви не заповнили поле'
    )
  )
    return;

  // перевірка валідності Еmail
  if (!validateEmail(email)) {
    toggleError('js-registration-form-email', !email);
    emailError.classList.add('error');
    errorInputMessage('email-error', 'Ввели не коректну електронну адресу');
    return false;
  } else {
    toggleError('js-registration-form-email', !email);
    emailError.classList.remove('error');
    errorInputMessage('email-error', '');
  }

  // перевірка валідності username
  if (
    validateInput(
      username,
      'js-registration-form-username',
      'username-error',
      'Ви не заповнили поле'
    )
  )
    return;

  // перевірка валідності password
  if (password.length <= 5) {
    toggleError('js-registration-form-password', !password);
    passwordError.classList.add('error');
    errorInputMessage('password-error', 'Занадто короткий пароль');
    return false;
  } else {
    toggleError('js-registration-form-password', !password);
    passwordError.classList.remove('error');
    errorInputMessage('password-error', '');
  }
  const localUserInfo ={
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
    username: username,

  }
  localStorage.setItem('localUserInfo', JSON.stringify(localUserInfo))
  const body = {
    disabledSeasonAnimation: checkboxChecked,
    email: email,
    firstName: firstName,
    language: language,
    lastName: lastName,
    password: password,
    role: 2,
    username: username,
  };
  
  console.log(body);

  fetch(
    'https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  )
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      document.getElementById('js-message__name').innerText = firstName;
      event.target.reset();
      document.getElementById('js-form').classList.add('hide');
      document.getElementById('js-message').classList.add('show');
      document.getElementById('js-message__info').innerText =
        response.message[language];
    });
};

export { registration };
