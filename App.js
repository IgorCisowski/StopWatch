//DOM
const stopWatch = document.querySelector(".stopWatch");
const startButton = document.querySelector(".startButton");
const resetButton = document.querySelector(".resetButton");

//   Toggle start button
let flag = false;
let startTime;

const startStopToggle = () => {
  if (!flag) {
    flag = !flag;
    startButton.textContent = "Stop";
    startButton.classList.add("stopButton");
    startTime = setInterval(run, 10);
  } else {
    flag = !flag;
    startButton.textContent = "Start";
    startButton.classList.remove("stopButton");
    clearInterval(startTime);
  }
};

//   Reset button
const reset = () => {
  clearInterval(startTime);
  stopWatch.textContent = "00 : 00 : 00";
  startButton.textContent = "Start";
  startButton.classList.remove("stopButton");
  miliSeconds = 00;
  seconds = 00;
  minutes = 00;
};

let miliSeconds = 0;
let seconds = 0;
let minutes = 0;
let initiateInterval;
// Start Timer Function
function run() {
  miliSeconds += 10;

  if (miliSeconds === 1000) {
    seconds++;
    miliSeconds = 0;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  //New values for MS, S, M
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;
  // NIE WIEM CHYBA COŚ TU TRZEBA ZMIENIĆ
  let mili = miliSeconds < 10 ? `0${miliSeconds}` : miliSeconds;
  //Update time watch
  stopWatch.textContent = `${m} : ${s} : ${mili}`;
}

// Listeners onClick to start & stop Watch
startButton.addEventListener("click", startStopToggle);
resetButton.addEventListener("click", reset);
