//Intersection Observer API

const items = document.querySelectorAll('.item-list');

const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        console.log(entry.rootBounds);
        entry.target.classList.toggle('item-list--show', entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    },
    {
      threshold: 1,
    }
);


items.forEach(item => {
  observer.observe(item);
});
