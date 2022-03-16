//events
//click

const clickContainer = document.querySelector('.click-container');
const buttons = clickContainer.querySelectorAll('.button');


buttons.forEach(btn => {
   btn.addEventListener('click', event => {
     event.target.disabled = true; // set disabled attr for buttons
     console.log('button');
   })
});

const mouseContainer = document.querySelector('.mouse-container');
const buttons2 = mouseContainer.querySelectorAll('.button');

buttons2.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      return btn.innerText = 'Somebody hover this button';
    });
    btn.addEventListener('mouseleave', () => {
      return btn.innerText = 'Click';
    })
});

//scroll


// let counter = 0;
//
// const handler = () => {
//   const getBound = document.body.getBoundingClientRect().bottom;
//
//   if(getBound < document.body.clientHeight + 150){
//     const addHtml = document.createElement('div');
//     addHtml.className = 'container';
//     counter++;
//     addHtml.innerHTML = `<p>${counter}</p>`;
//     document.body.append(addHtml);
//   }
// };
//
// window.addEventListener('scroll', handler);

//preventDefault event object

const form = document.querySelector('.form');
const input = form.querySelector('.form__input');

input.addEventListener('change', function(){
  console.log(input.value);
});

const submit = (form, input) => { //function factory!!! events example
  return {
    empty(){
      alert('Success!');
      return input.value = '';
    },
    checker(){
      //check one field
      console.log(input.value);
      return input.value === '' ? alert('Attention! fill the fields') : this.empty();
    },
    submitForm(){
      form.addEventListener('submit', event => {
        event.preventDefault();
        this.checker();
      });
    },
  }
};

const sub = submit(form, input);
sub.submitForm();


//stopPropagation / propagation

const ab = document.querySelector('.test-div');
const buttons3 = ab.querySelectorAll('.button');

ab.addEventListener('click', event => {
  console.log(event.target, 'Clicked div')
});

buttons3.forEach( btn => {
  btn.addEventListener('click', event => {
    event.stopImmediatePropagation(); //for more events
    console.log(event.target, 'Clicked buttons')
  });
});

//event delegation
//--event-target - конкретно выделяет элемент на который был евент
//--event.currentTarget - выделяет элемент на который был навешен слушатель
//--event.target.closest() - указывает элемент на котором замыкается евент

const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
  event.target.closest('li').classList.toggle('color');
  console.log(this)
});

//drag && drop

const draggables = document.querySelectorAll('.item-list__item');
const containers = document.querySelectorAll('.list-active');

draggables.forEach( item => {
  item.addEventListener('dragstart', event => {
    console.log(event);
    item.classList.add('dragging')
  });

  item.addEventListener('dragend', event => {
    console.log(event);
    item.classList.remove('dragging')
  });
});

containers.forEach(container => {
  container.addEventListener('dragover', event => {
    event.preventDefault();
    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable);
  });
});



