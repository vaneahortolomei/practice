//возврат нового массива по нужному атему

const arr = [1,2,3,4,5,6,7];
let arr2 = [true, false, true, false, true];

const res = arr.filter(item => {
  return item > 3
});


const filterBoolean = array => {
  if(array === null || array === undefined) return;
  return array.filter( boolean => boolean === true).length;
};
console.log(`The length of boolean array is ${filterBoolean(arr2)}`);

console.log(res);
