const arr = [50, 20, 30, 20, 15, 45, 42, 100, 23, 56, 22];

const container = document.querySelector('.graph');
const graph = document.getElementById('graph');
const inner = document.createElement('div');
const loader = document.createElement('p');
inner.className = 'graph__inner';
loader.textContent = 'load graph ...';
container.appendChild(inner);

arr.forEach((item) => {
    const imp = document.importNode(graph.content, true);
    imp.querySelector('.graph__line').style.minHeight += item + 'px';
    imp.querySelector('.graph__line').setAttribute('data-tooltip',`${item}`);
    container.appendChild(loader);
    setTimeout(() => {
        inner.appendChild(imp);
    }, 3000)
});


setTimeout(() => {
    loader.style.display = 'none';
}, 3000)





