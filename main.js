const timer = document.querySelector('#time');
const start_btn = document.querySelector('#start_btn');
const pause_btn = document.querySelector('#pause_btn');
const reset_btn = document.querySelector('#reset_btn');

const timer_A = document.querySelector('#time_A');
const start_btn_A = document.querySelector('#start_btn_A');
const pause_btn_A = document.querySelector('#pause_btn_A');
const reset_btn_A = document.querySelector('#reset_btn_A');

const timer_B = document.querySelector('#time_B');
const start_btn_B = document.querySelector('#start_btn_B');
const pause_btn_B = document.querySelector('#pause_btn_B');
const reset_btn_B = document.querySelector('#reset_btn_B');

const object_timer = document.querySelector('#object_timer');

let time = 0,
  interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() {
  interval = setInterval(showTime, 1000);
  setInterval(showTimeObjects, 1000);
  hideBtn([start_btn]);
  showBtn([pause_btn, reset_btn]);
}

function pause() {
  if (interval) {
    clearInterval(interval);
    clearInterval(interval_A);
    clearInterval(interval_B);
    interval = null;
    interval_A = null;
    interval_B = null;
    pause_btn.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    pause_btn.innerHTML = 'PAUSE';
  }
}

function reset() {
  clearInterval(interval);
  clearInterval(interval_A);
  clearInterval(interval_B);
  interval = null;
  interval_A = null;
  interval_B = null;
  pause_btn.innerHTML = 'PAUSE';
  pause_btn_A.innerHTML = 'PAUSE';
  pause_btn_B.innerHTML = 'PAUSE';
  time = 0;
  time_A = 0;
  time_B = 0;
  timer.innerHTML = toHHMMSS(time);
  timer_A.innerHTML = toHHMMSS(time_A);
  timer_B.innerHTML = toHHMMSS(time_B);
  hideBtn([pause_btn, reset_btn]);
  hideBtn([pause_btn_A, reset_btn_A]);
  hideBtn([pause_btn_B, reset_btn_B]);
  showBtn([start_btn]);
  showBtn([start_btn_A]);
  showBtn([start_btn_B]);
}

function toHHMMSS(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');

  return hours + ':' + minutes + ':' + seconds;
}

function showBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}
// Object A
let time_A = 0,
  interval_A;
var timeA;

function showTime_A() {
  time_A += 1;
  timer_A.innerHTML = toHHMMSS(time_A);
  window.timeA = time_A;
}

function start_A() {
  interval_A = setInterval(showTime_A, 1000);
  hideBtn_A([start_btn_A]);
  showBtn_A([pause_btn_A]);
}

function pause_A() {
  if (interval_A) {
    clearInterval(interval_A);
    interval_A = null;
    pause_btn_A.innerHTML = 'RESUME';
  } else {
    interval_A = setInterval(showTime_A, 1000);
    pause_btn_A.innerHTML = 'PAUSE';
  }
}

function reset_A() {
  clearInterval(interval_A);
  interval_A = null;
  pause_btn_A.innerHTML = 'PAUSE';
  time_A = 0;
  timer_A.innerHTML = toHHMMSS(time_A);
  hideBtn_A([pause_btn_A, reset_btn_A]);
  showBtn_A([start_btn_A]);
}

function showBtn_A(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn_A(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}

// Object B
let time_B = 0,
  interval_B;
var timeB;

function showTime_B() {
  time_B += 1;
  timer_B.innerHTML = toHHMMSS(time_B);
  window.timeB = time_B;
}

function start_B() {
  interval_B = setInterval(showTime_B, 1000);
  hideBtn_B([start_btn_B]);
  showBtn_B([pause_btn_B]);
}

function pause_B() {
  if (interval_B) {
    clearInterval(interval_B);
    interval_B = null;
    pause_btn_B.innerHTML = 'RESUME';
  } else {
    interval_B = setInterval(showTime_B, 1000);
    pause_btn_B.innerHTML = 'PAUSE';
  }
}

function reset_B() {
  clearInterval(interval_B);
  interval_B = null;
  pause_btn_B.innerHTML = 'PAUSE';
  time_B = 0;
  timer_B.innerHTML = toHHMMSS(time_B);
  hideBtn_B([pause_btn_B, reset_btn_B]);
  showBtn_B([start_btn_B]);
}

function showBtn_B(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn_B(btnArr) {
  btnArr.forEach((btn) => (btn.style.display = 'none'));
}

// Object Sum
function showTimeObjects() {
 object_timer.innerHTML = sum_time(timeA, timeB);
}

function sum_time(t1, t2) {
    let total_time = t1 + t2;
    return total_time
}
