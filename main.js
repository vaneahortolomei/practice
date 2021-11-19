// подгрузка контента

// const data = {
//   list: document.querySelector('.card-list'),
// };
const container = document.querySelector('.container');

getItems();

window.addEventListener('scroll', () => {
  const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

  if(clientHeight + scrollTop >= scrollHeight - 5){
    showLoading();
  }
});

// fetch function
async function getItems(callback){
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/?_limit=${getRandom()}`);
  callback = await response.json();
  renderCard(callback);
}
function showLoading(){
  // const p = document.createElement('p');
  // p.textContent = 'Loading...';
  // container.appendChild(p);
  setTimeout(getItems, 1000);
}

function getRandom(){
  return Math.floor(Math.random() * 100) + 1;
}
//render card
function renderCard(arr){
  let list = document.querySelector('.card-list');
  let display = '';
  arr.forEach((card) => {
    display += `
      <li class="card">
          <h2 class="card__operation">${card.title}</h2>
          <span class="card__value"><b>${card.userId}</b></span>
          <span class="card__value"><b>${card.id}</b></span>
           </li>
  `;
  });
  list.innerHTML = display;
}


