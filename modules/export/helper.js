export const users = [
  {
    user: 'Andy',
    status: 'admin',
    age: 22,
    salary: 2250
  },
  {
    user: 'Jimmy',
    status: 'user',
    age: 21,
    salary: 3310
  },
  {
    user: 'Brian',
    status: 'admin',
    age: 24,
    salary: 1405
  }
];


export function calc(arr) {
  return arr.reduce((a, b) => {
   return a + b.salary
  }, 0)
}
