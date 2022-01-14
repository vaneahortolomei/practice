const postList = document.querySelector('.list');
const postTemplate = document.getElementById('post');
const xhrButton = document.querySelector('.btn_click');
const sendForm = document.querySelector('.form');
const fetchButton = document.querySelector('.btn_click_fetch');
const reloadButton = document.querySelector('.btn_click_reload');

reloadButton.addEventListener('click', function(){
  return window.location.reload();
});

//XMLHttpRequest
const sendHttpRequest = function (method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (resolve) {
        resolve(xhr.response);
      } else {
        reject((err) => {
          console.log(err);
        })
      }

    });
    xhr.send();
  });
};

async function xhrPost() {
  try {
    const response = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
    for (const post of response) {
      const postItem = document.importNode(postTemplate.content, true);
      postItem.querySelector('h2').textContent = post.title.toUpperCase();
      postItem.querySelector('p').textContent = post.body;
      postList.append(postItem);
    }
  } catch (err) {
    alert('Error')
  }
}



async function sendPost(title, body) {
  const userId = Math.floor(Math.random() * 10);
  const contentBody = {
    title: title,
    body: body,
    userId: userId,
  };
  await sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', contentBody);
}

xhrButton.addEventListener('click', () => {
  xhrPost().then(() => {
    console.log('xhr items are loaded!')
  });
});

//Fetch

const fetchItems = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: data,
  }).then(response => {
    return response.json();
  })
};

async function sendFetchPost(title, body){
  let userId = Math.floor(Math.random() * 10);
  const contentBody = {
    title: title,
    body: body,
    userId: userId,
  };

  const fd = new FormData();
  fd.append('title', title);
  fd.append('body', body);
  fd.append('userId', userId);

  await fetchItems('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

async function fetchPost(){
  try {
    const response = await fetchItems('GET', 'https://jsonplaceholder.typicode.com/posts');
    for (const post of response) {
      const postItem = document.importNode(postTemplate.content, true);
      postItem.querySelector('h2').textContent = post.title.toUpperCase();
      postItem.querySelector('p').textContent = post.body;
      postList.append(postItem);
    }
  } catch (err) {
    alert('Error')
  }
}

fetchButton.addEventListener('click', () => {
  fetchPost().then(() => {
    console.log('fetch items are loaded!')
  });
});


sendForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = sendForm.querySelector('.form__input').value;
  const text = sendForm.querySelector('.form__textarea').value;
  // sendPost(title, text).then(response => console.log(response));
  sendFetchPost(title, text).then(res => console.log(res));
});

