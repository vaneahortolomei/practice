//Intersection Observer API

const test = document.querySelector('.test');

observer = new IntersectionObserver(entries => {
  const checker = () => {
    return entries[0].isIntersecting ?
      entries[0].target.style.opacity = '0' : entries[0].target.style.opacity = '1'
  };
  setTimeout(checker, 500);
}, {threshold: 1});


observer.observe(test);

