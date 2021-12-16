//native function constructor

function Person(){
  this.name = 'David';
  this.age = 30;
  this.job = 'Developer';
  this.salary = 1500;
  this.greet = function(){
    console.log(`My name is ${this.name}`)
  };
  this.obj = function(){
    console.table([this.age, this.job, this.salary]);
  }
}

const person = new Person();
person.greet();
person.obj();

