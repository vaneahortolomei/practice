//возврат индекс массива

const arr = [1,2,3,4,5,6,7];
const res = arr.indexOf(3);
console.log(res);

if(arr.indexOf(100) === -1){
  console.log(true)
}else {
  console.log(false)
}
