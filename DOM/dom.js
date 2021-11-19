const body = document.querySelector('body');
window.addEventListener('click', (e) => {
  e ? body.style.background = 'green' : '';
  setTimeout(() => {
    body.style.background = '';
  }, 5000)
});
window.addMovieHandler();
