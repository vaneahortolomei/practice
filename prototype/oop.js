//prototypes
window.addEventListener('load', () => {
  console.log(check(isIt));
});

const obj = {
  age: 11,
};

const isIt = obj.hasOwnProperty('age');

function check(el){
  return el === true ? 'cool' : 'negative'
}


function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.getInfo = function(){
    console.log(this.age, this.name);
  }
}

Person.prototype = {
  getAge(){
    console.log(this.age);
  },
};

Person.prototype.getJob = function(){
  console.log(this.job);
};

const per = new Person('andy', 20, 'developer');
per.getInfo();
per.getAge();
per.getJob();
console.log(per.__proto__);
console.log(per.toString());
console.log(Object.prototype); // prototype

// console.log(per.__proto__);


const student = Object.create({
  setGreet: function(){
    console.log('Hello');
  }
}, {
  name: {
    configurable: true,
    enumerable: true,
    value: 'Andy',
    writable: true,
  }
});

student.setGreet();
console.log(student);

const man = {
  name: 'Danny',
  age: 22,
  job: 'killer',
};

const newPers = Object.assign(man);
console.log(newPers);
console.log(man.__proto__.constructor === newPers.__proto__.constructor)

const man2 = {...man};
console.log('man2', man2);

const man3 = {
  name: 'Sandy',
  age: 21,
  job: 'actor',
};
const {name, age, job} = man3;

if(name === 'Sandy') console.log(true); // example

console.log(name, age, job);





