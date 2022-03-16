export const users = [
  {user: 'Andy', status: 'admin', age: 22},
  {user: 'Jimmy', status: 'user', age: 21},
  {user: 'Brian', status: 'admin', age: 24}
];

export function add(x){
  return x + 2;
}
export function sub(x){
  return x - 2;
}

export function random(x){
  return Math.floor(x + Math.random() * 100);
}

export function user(u){
  return u.filter(u => u.status === 'admin');
}

