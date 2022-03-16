//базовый класс
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value <= 17) {
      console.log(`${this.name}, иди нахуй!`);
    } else console.log(`${this.name}, заходи!`);
    return this._age = value;
  }
}

new User('Jimmy', 17);
new User('Andy', 18);

class Dev {
  name = 'Andy';

  sayHi() {
    return `${this.name}, hi!`
  }
}

console.log(new Dev().sayHi());


//наследование extends

class Developer {
  constructor(name) {
    this.name = name;
    this.lang = '';
    this.skills = '';
  }

  myLang(name, lang) {
    this.lang = lang;
    return `${this.name} lang is ${lang}`
  }

  mySkills(name, skills) {
    this.skills = skills;
    return `${this.name} skills is ${skills}`
  }

  newSkills(name, skills) {
    this.skills = skills;
    return `After half year,${this.name} have a new skills. Go ahead ${this.name}!:  ${skills}`
  }
}


class Andy extends Developer {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  greeting() {
    return `Hello all, i'm ${this.name}. And i'm web developer`;
  }

  aboutDev() {
    return `${this.name} is Developer! And he's ${this.age} year old`;
  }

  newSkills(name, skills) {
    return super.newSkills(name, skills);
  }
}

let andy = new Andy('Andy', 21);
console.log(andy.greeting());
console.log(andy.myLang('Andy', 'JS'));
console.log(andy.mySkills('Andy', ['c#', 'java']));
console.log(andy.newSkills('Andy', ['python', 'c++']));
console.log(andy.aboutDev());


let user = {
  name: "ivan",
  eat() {         // animal.eat.[[HomeObject]] == animal
    console.log(`${this.name} havaet salat.`);
  }
};

let user2 = {
  __proto__: user,
  name: "jimbo",
  eat() {         // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};

user2.eat();

let longEar = {
  __proto__: user2,
  name: "Длинноух",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};
longEar.eat();


//статические свойства и методы
//статические методы которые вызываются отдельно от экземпляра

class Incomes {
  constructor(name, sum) {
    this.name = name;
    this.sum = sum;
  }

  static filterSum(a) {
    return a.sum < 6000
  }
}

let generalSum = [
  new Incomes('tom', 6000),
  new Incomes('andy', 6000),
  new Incomes('billy', 2000),
  new Incomes('sony', 1000),
];

let a = generalSum.filter(Incomes.filterSum);

let newUsers = [];

a.forEach((user) => {
  newUsers.push({
    name: user.name,
    sum: user.sum
  });
});

let newArr = [...newUsers];
console.log(newArr);





