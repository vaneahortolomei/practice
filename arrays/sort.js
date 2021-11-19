//сортировка массива по цифрам,имен


//reverse function
const arr = [2,3,4,5,6,7,8,5]
arr.sort((a,b) => {
  return  a - b ? -1 : 1;
});

console.log(arr);

//from min to max
arr.sort((a, b) => a - b);
console.log(arr);
