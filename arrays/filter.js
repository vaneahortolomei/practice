//возврат нового массива по нужному атему

const arr = [1,2,3,4,5,6,7];
const res = arr.filter(item => {
  return item > 3
});

console.log(res);
