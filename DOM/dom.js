function getElement(el){
  return document.querySelector(el);
}
function personFactory(name, lastName, age, job, ...hobby) {
  return {
    info() {
      return {
        name,
        lastName,
        age,
        job,
        hobby
      }
    },
    greet() {
      return `Hello, I'm ${name}`
    }
  }
}

const person = personFactory(
    'John',
    'Calvin',
    23,
    'Developer',
    ['porn, velocity']
);

getElement('.p-name').innerText = person.greet();

//parents elements

const ul = document.querySelector('ul');
console.log(ul.childNodes); //node
console.log(ul.firstChild); //text
console.log(ul.firstElementChild); //li
console.log(ul.children); //HTMLCollection


console.log(ul.parentNode); //nav
console.log(ul.parentElement); //nav
console.log(ul.closest('body')); //body

//siblings element

const li = document.querySelector('li');
const a = li.parentElement;

console.log(a.previousElementSibling); //p
console.log(a.nextElementSibling); // input

//DOM style

//Inline styles

const nav = document.querySelector('nav');
nav.style.transition = '0.2s';


//className
//checker
const check = menu => {
  return menu.contains.className = 'bg-red' ?
      setTimeout(() => {
        menu.className = '';
        menu.style.backgroundColor = 'green'
      }, 1500) :
      menu.className = 'bg-red';
};

check(nav);


//classList
nav.addEventListener('click', function(){
  nav.classList.toggle('height')
  nav.innerHTML = `<h2>Header</h2>`;
});

//creatingElement

const span = document.createElement('span');
span.textContent = 'text';
nav.appendChild(span);
nav.append(span);

//string element
span.textContent = 'new'; //new text


//insert

const div = document.querySelector('.test-block');
div.insertAdjacentHTML('beforebegin', `<span>firstText</span>`); // before p tag

//appendChild

div.append('string'); // string
div.appendChild(span); // element
const s = document.createElement('p');
div.prepend(s); // before all elements
s.textContent = 'addElement';

//before, after, replaceWith, insertAdjacentElement


//cloneNode
div.cloneNode(true);
div.append(s);


//querySelectorAll vs getElementByTagName
//querySelectorAll - staticNodeList(nodeList)
//getElementByClass/Tag - liveNodeList(HTMLCollection)

//removeElements

document.body.addEventListener('click', function(){
  div.parentElement.removeChild(nav); // remove element
});



