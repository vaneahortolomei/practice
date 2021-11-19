const input1 = document.getElementById('text');
const input2 = document.getElementById('text2');
const btn = document.querySelector('.btn');

//title function

const data = {
  title: document.querySelector('.title'),
  list: document.querySelector('.card-list'),
  arr: [],
};


function changeTitle(){
   if(data.arr.length > 0){
     return data.title.textContent = 'The list of cards'
   }
}


// calc function
function calc(a = 0, b = 0) {
  return a + b;
}

// render function

function renderCard(result) {
  data.arr.push(data.list.innerHTML += `
          <li class="card">
          <h2 class="card__operation">${result.operation}</h2>
          <span class="card__value">First value: <b>${result.inputOne}</b></span>
          <span class="card__value">Second value: <b>${result.inputTwo}</b></span>
          <p class="card__result">Result: <b>${result.result}</b></p>
           </li>`);

}

// print function
function printValue(result) {
  return renderCard(result);
}

//getInfo about input
function getInfo() {
  //get values
  const num1 = +input1.value;
  const num2 = +input2.value;
  const result = calc(num1, num2);

  //set info
  const logEntry = {
    operation: 'ADD',
    inputOne: num1,
    inputTwo: num2,
    result: result
  };

  //print info
  printValue(logEntry);
  changeTitle();
}

//Event
btn.addEventListener('click', getInfo);
