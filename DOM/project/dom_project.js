//variables
const dialog = document.querySelector('.modal-dialog');
const openModal = document.querySelector('#open');
const closeBtn = dialog.querySelector('#cancel');
const overlay = document.querySelector('#modal-form');
const addBtn = closeBtn.nextElementSibling; //add button
const inputElements = dialog.querySelectorAll('input');
const deleteModal = document.getElementById('modal-delete');

const movies = [];

const removeFromBackdrop = (modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === dialog) {
      modal.classList.remove('active');
    }
  });
};

const closeModalWindow = (modal) => {
  modal.classList.remove('active');
};

const openModalWindow = (modal) => {
  modal.classList.add('active');
};


const deleteItemActions = movieId => {
  openModalWindow(deleteModal);
  const cancelModal = deleteModal.querySelector('.button--red');
  const deleteItem = deleteModal.querySelector('.button--green');

  cancelModal.addEventListener('click', () => {
    closeModalWindow(deleteModal);
  });
  deleteItem.addEventListener('click', () => {
    closeModalWindow(deleteModal);
    deleteMovie(movieId)
    updateUI()
  })
};

const updateUI = () => {
  const sectionBlock = document.getElementById('entry-text');
  if (movies.length > 0) {
    sectionBlock.style.display = 'none'
  } else {
    sectionBlock.style.display = 'block'
  }
};

const deleteMovie = movieId => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const countList = document.getElementById('movie-list');
  countList.children[movieIndex].remove();
};

const deleteMovieHandler = movieId => {
  deleteItemActions(movieId);
};

const renderCardMovie = (id, title, url, rating) => {
  const newMovieEl = document.createElement('li');
  newMovieEl.className = 'list__item item';
  newMovieEl.innerHTML = ` 
            <img src="${url}" class="item__url" alt="${title}">
            <div class="item__info">
            <h2 class="item__title">${title}</h2>
            <span class="item__rating">${rating}/5</span>
            </div>`
  newMovieEl.addEventListener('click', deleteMovieHandler.bind(null, id));
  const movieList = document.getElementById('movie-list');
  movieList.append(newMovieEl);
};


const clearInputs = () => {
  for (const usrInput of inputElements) {
    usrInput.value = '';
  }
};


const addMovieHandler = (e) => {
  e.preventDefault();
  let titleValue = inputElements[0].value;
  let urlValue = inputElements[1].value;
  let ratingValue = inputElements[2].value;

  if (titleValue.trim() === '' ||
      urlValue.trim() === '' ||
      ratingValue.trim() === '') {
    alert('Fields are empty!');
    return;
  }
  if (+ratingValue > 5 ||
      +ratingValue < 1) {
    alert('The number need to be less 5 or more 0');
    return;
  }

  const addNewMovie = {
    id: Math.random().toString(),
    title: titleValue,
    url: urlValue,
    rating: ratingValue
  };

  movies.push(addNewMovie);

  closeModalWindow(overlay);
  clearInputs();
  updateUI();
  renderCardMovie(addNewMovie.id, addNewMovie.title, addNewMovie.url, addNewMovie.rating)
};


//add movie
addBtn.addEventListener('click', addMovieHandler);
//open window
openModal.addEventListener('click', () => {
  openModalWindow(overlay);
  removeFromBackdrop(overlay);
});
