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


async function trackHandler() {
  // let positionData;
  let posData;
  let setData;
  try {
    posData = await getPosition(); //async sugar syntax
    setData = setTimer(2000);
  }catch (err) {
    console.log(err);
  }
  console.log(posData, setData);
      // .then(posData => {
      //   positionData = posData;
      //   return setTimer(1000);
      // })
      // .catch((err) => {
      //   console.log(err);
      //   return 'fuck...'
      // })
      // .then(data => {
      //   console.log(data, positionData);
      // });
  setTimer(1000).then(() => {
    console.log('Time done');
  })
}


Promise.all([getPosition(), setTimer(1000)]).then( (data) => {
    console.log(data);
});

window.addEventListener('load', () => {
  btn.addEventListener('click', trackHandler);
});



