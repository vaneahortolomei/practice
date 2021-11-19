const arr = [1,2,3,4,5,6,7,3,5,7,3,13,5];

const ids = new Set(arr); // Колекция уникальных значений
console.log(ids);

ids.has(100) ? console.log(true) : console.log(false)
