//делает из массива строку - join
//делает из строки массив  - split
const arr = ['string', 'fafefge'];
const res = arr.join();
console.log(res)
const res2 = res.split(',');
console.log(res2);

function solution(str){
  return str.split('').reverse().join('');
}

console.log(solution('hello'));
