// парадигмы, данный раздел говорит о том что у нас есть три разных подхода для написания кода. Это не фича или синтакс.
// Это процедуральное программирование,функциональное и ооп

// ооп,похожий подход на функциональное программирование но только с использованием классов либо функций конструкторов,старый подход.
class Validator {
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';
  static validate(value, flag, validator) {
    if(flag === this.REQUIRED){
      return value.trim().length > 0;
    }
    if(flag === this.MIN_LENGTH){
      return value.trim().length > validator
    }
  }
}

class User {
  constructor(uName, uPassword) {
    this.userName = uName;
    this.userPassword = uPassword;
  }

  greet(){
    console.log('hello, ' + this.userName);
  }
  showPass(){
    setTimeout( () => {
      console.log('my pass, ' + this.userPassword)
    }, 5000)
  }
}

class UserInputForm {
  constructor() {
    this.form = document.querySelector('.form');
    this.userNameInput = document.querySelector('.text-input');
    this.passwordInput = document.querySelector('.password-input');

    this.form.addEventListener('submit', this.signupHandler.bind(this))
  }

  signupHandler(event){
    event.preventDefault();
    const userName = this.userNameInput.value;
    const passwordField = this.passwordInput.value;

    if(!Validator.validate(userName, Validator.REQUIRED) ||
    !Validator.validate(passwordField, Validator.MIN_LENGTH, 5)) {
      console.error('Input or password are empty or need more symbols');
    }

    const newUser = new User(userName, passwordField);
    console.log(newUser);
    newUser.greet();
    newUser.showPass();
  }
}

new UserInputForm();

