//spread operator
//копирование массива

const arr = ['name', 'name2', 'name3'];

const anotherArr = [...arr];

console.log('fist array', arr); // old array
console.log('copied array', anotherArr); // copied array

const persons = [{name: 'sanea', age:  22}, {name: 'jeka', age: 23}];
const copiedPersons = [...persons.map(person => ({
  name: person.name, age: person.age
}))];

persons.push({name: 'anea', age: 22});

console.log(persons);
console.log(copiedPersons);
