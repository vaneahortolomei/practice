//смысл функционального программирования это организовать код в виде чистых функций,разделяя код на блоки функций с целью их дальнейшего переиспользования.
const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputElement) {
  return document.querySelector(inputElement).value;
}

function createUser(userName, userPass) {
  if (!validate(userName, REQUIRED) || !validate(userPass, MIN_LENGTH, 5)) {
    throw new Error(
        'Input or password are empty or need more symbols!'
    );
  }
  return {
    userName: userName,
    userPass: userPass,
  }
}

function formSubmit(event) {
  event.preventDefault();
  const userInputName = getUserInput('.text-input');
  const userInputPass = getUserInput('.password-input');


  try {
    const newUser = createUser(userInputName, userInputPass);
    console.log(newUser);
  } catch (err) {
    console.log(err.message);
  }
}

function connectForm(formElement, submitFunction) {
  const form = document.querySelector(formElement);
  form.addEventListener('submit', submitFunction)
}

connectForm('.form', formSubmit);
