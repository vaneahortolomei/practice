//процедуральное программирование состоит из просто обычной структуры кодa который пишется шаг за шагом.


const form = document.querySelector('.form');

const formFunction = function(event){
  event.preventDefault();
  const inputName = document.querySelector('.text-input');
  const addName = inputName.value;

  const passwordInput = document.querySelector('.password-input');
  const addPassword = passwordInput.value;

  if(addName.trim().length === 0){
    alert('Input text - input is empty');
    return;
  }

  if(addPassword.trim().length <= 5){
    alert('Input pass - must to be longer than 5');
  }

  const objPerson = {
    myName: addName,
    myPass: addPassword
  };

  console.log(objPerson)
  console.log(`Hello, ${objPerson.myName}`);
  console.log(addName.trim().length);
};

form.addEventListener('submit', formFunction);
