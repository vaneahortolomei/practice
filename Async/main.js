//callback function

const btn = document.querySelector('.button');

function getPosition(opts) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
          resolve(success);
        },
        error => {
          reject(error);
        }, opts)
  })
}

//Promises
function setTimer(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolve) {
        resolve('Done!');
      } else {
        reject('Error!')
      }
    }, duration);
  });
}


function trackHandler() {
  let positionData;
  getPosition()
      .then(posData => {
        positionData = posData;
        return setTimer(2000);
      })
      .then(data => {
        console.log(data, positionData);
      })
}

window.addEventListener('load', () => {
  btn.addEventListener('click', trackHandler);
});
