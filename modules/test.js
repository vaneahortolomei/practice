// function summation(num){
//   let i;
//   let res = [];
//   for(i = 1; i <= num; i++) {
//     console.log(i);
//     res.push(i);
//   }
//   console.log(res);
//   return res.reduce((a, b) => {
//     return a + b;
//   }, 0);
// }
//
// console.log(summation(2));

//1 + 2 + 3 + 4 + 5

var expiredInTimer = 0;
var timer = null;
var test = document.querySelector('.test')
// var testtest = document.querySelector('.test');

function expiredInFormat() {
  if (expiredInTimer === null || expiredInTimer < 0) {
    return '';
  }

  if (expiredInTimer > 60 * 60) {
    return Math.ceil(expiredInTimer / (60 * 60));
  } else {
    var minutes = Math.floor(expiredInTimer / 60);
    var seconds = expiredInTimer % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
}

function showTimer() {
  return Boolean(expiredInTimer);
}

function startTimer(time) {
  expiredInTimer = time;
  if (expiredInTimer > 0) {
    timer = setInterval(() => {
      if (expiredInTimer > 0) {
        expiredInTimer--;
      }
    }, 1000);
  }
}


test.innerHTML = expiredInFormat();

console.log('startTimer', startTimer(Math.ceil(Date.parse('Aug 9, 1995') - Date.now() / 100)));
console.log('showTimer', showTimer());
console.log('format', expiredInFormat());
