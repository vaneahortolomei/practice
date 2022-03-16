//lodash library --- //готовые функции

//axios - fetch library

async function getItems() {
  try {
    return await axios.get('https://jsonplaceholder.typicode.com/posts')
  } catch (e) {
    console.error(e);
  }
}

const container = document.querySelector('.container');
const createEl = document.createElement('p');
createEl.textContent = 'Loading...';
container.append(createEl);


setTimeout( () => {
  createEl.textContent = '';
  container.append(createEl);
}, 1500);

setTimeout(() => {
  console.log(getItems()
      .then(response => response.data));
}, 1500);
