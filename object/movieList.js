const addBtn = document.getElementById('addBtn');
const searchBtn = document.getElementById('searchBtn');

let movies = [];

const displayRenderItems = (list) => {
  let displayItems = '';
  movies.forEach((card) => {
    const {title, name, value} = card; //obj destructuring
    displayItems += `
      <li class="movie-list__item">
        <span class="movie-list__option">- ${title}</span>
        <span class="movie-list__option">- ${name}</span>
        <span class="movie-list__option">- ${value}</span>
      </li>
    `
    list.innerHTML = displayItems;
  })
};

const renderMovies = () => {
  const createList = document.querySelector('.movie-list');
  displayRenderItems(createList);
  return movies.length === 0 ? createList.classList.remove('visible') :
      createList.classList.add('visible');
};

const addMovieHandler = () => {
  const titleInput = document.getElementById('movie').value;
  const nameInput = document.getElementById('name').value;
  const valueInput = document.getElementById('value').value;

  if (titleInput.trim() === ''
      || nameInput.trim() === ''
      || valueInput.trim() === '') {
    alert('Some field or fields are empty');
    return;
  }

  const newMovie = {
    title: titleInput,
    name: nameInput,
    value: valueInput,
    id: Math.random(),
    getFormatTitle(){
      console.log(this);
      this.title.toUpperCase();
    }
  };
  movies.push(newMovie);
  renderMovies();
};


addBtn.addEventListener('click', addMovieHandler);



