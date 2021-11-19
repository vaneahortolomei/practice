//collection

//создание карты с использованием любого типа ключа и значение

const arr = [['a','string' ], [2, 'number'], [true, 'boolean']];
const res = new Map(Object.entries(arr));
const res2 = Object.fromEntries(res.entries())
console.log(res2)
