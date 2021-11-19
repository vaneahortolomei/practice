console.log(5 + 4 === 10 && 4 < 5 && 10 > 9 || 'hi');

let num = 2;
console.log(num);
console.log(isFinite(num));


!isFinite(num) ? console.log('Это не целое число') : console.log('Это целое число');

const pr = document.getElementById('progress');
const numb = document.querySelector('span');
const btn = document.querySelector('button');


btn.addEventListener('click', (e) => {
  let random = Math.random() * 10;
  let result = pr.value -= random;
  if(e.currentTarget){
     numb.textContent = Math.floor(result) + '%';
  }
  if(result <= 0){
    btn.disabled = true;
    const container = document.querySelector('.container');
    let btn2 = document.createElement('button');
    btn2.innerText = 'refresh page';
    container.appendChild(btn2);
    btn2.addEventListener('click', function(){
      location.reload();
    })
  }
});


let str = 'str' && 2 && 33 || null;
console.log(str);

let name = '';
console.log(!!name); // в корне ничего нет


const person = 'Max';

if(person){
  let hobbies = ['sport'];
  console.log('inside if', hobbies);
}

function greet(){
  let age = 30;
  let person = 'Max';
  console.log(age, person)
}

greet();

console.log(name);
