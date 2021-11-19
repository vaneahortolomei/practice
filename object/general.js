//primitive values
//objects

const person = {
  id: Math.random().toString(),
  'first name': 'John',
  age: 22,
};
console.log(person.id);

person.age = 22;
console.log(person);

delete person.age;
console.log(person);

person.un = undefined;
console.log(person);

person.un2 = '';
console.log(person);

console.log(person['first name']); // string key

//spread operator in object, copy object

const pers = {
  name: 'John',
  status: 'Married',
  age: 22
};

const pers2 = {...pers, age: 34};

console.log(pers2);
console.log(pers);


const obj = {
  name: 'John',
  age: 22,
  job: 'developer'
};


const {name, age, job} = obj;
