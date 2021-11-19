//pure functions
//функции с какими-то параметрами которые не несут за собой какие-то изменения внутри самой функции с данными параметрами

function sum(a, b){
  return a + b;
}
console.log(sum(1,2));


//functions side-effects
//функции сайд-эффект это функции которые используют внутри себя какие-то стороние объекты

let zero = 0;

function calc(a, b){
  const res = a + b;
  zero = res;
  return res;
}
console.log(calc(12,2));

const arr = [1,2];

function addNumber(a){
  a.push(3);
  return a;
}

console.log(addNumber(arr));

//factory functions - фабрика из функции

function calculatePercent(a){
  function multiple(b){
    function devide(c){
      return a * b / c;
    }
    return devide;
  }
  return multiple;
}

const res = calculatePercent(20000)(35)(100);
console.log(res);
const res2 = calculatePercent(70000)(20)(100);
console.log(res2);


function familyFactory(name, lastName, age, job, ...hobby){
  return {
    info(){
      return {
        name,
        lastName,
        age,
        job,
        hobby
      }
    },
    greet(){
      return `Hello, I'm ${name}`
    }
  }
}

const john = familyFactory(
    'John',
    'Rogers',
    22,
    'Developer',
    ['Soccer', 'Pull']
);
const peter = familyFactory(
    'peter',
    'Philips',
    45,
    'Truck driver',
    ['Girls', 'Boys']
);


console.log(john.greet());
console.log(john.info());
console.log(peter.greet());
console.log(peter.info());


//CLOSURES - ЗАМЫКАНИЯ

let user = 'Max';

function greet(){
  console.log(`Hi, my name is ${user}`)
}

user = 'John';
greet();


//IIFE - ImmediatelyInvokeFunctionExpresion
//old version
(function(){
  var age = 30;
  console.log(age)
})();


//with let and const we can create block scope
{
  let age = 30;
  console.log(age);
}

{
  var age = 30;
  console.log(age)
}


//recursion - самовызывающейся фунцкия

function recurs(a){
  if(a === 0) return 1;
  return a * recurs(a - 1);
}

console.log(recurs(2));
console.log(recurs(3));
console.log(recurs(4));

const topOffers = ['Cashpoint'];
const downOffers = ['Vivus', 'WebBankir', 'JoyMoney'];
topOffers.push(downOffers[1]);
console.log(topOffers);
downOffers.splice(1,1);
console.log(downOffers);
downOffers.filter(item => {
  return item !== 'WebBankir'
});

console.log(downOffers);
