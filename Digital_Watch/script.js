const start = document.querySelector("#start-btn");
const pause = document.querySelector("#pause-btn");
const reset = document.querySelector("#reset-btn");

let para = document.querySelector("#digital");

// const id = 5; // uncaught typeerror if we assign again in eventistener using const
let id = null;
let startTime;
let elapsedTime = 0;
let savedElapse = 0;

start.addEventListener("click", () => {
  if (id !== null) {
    return;
  }
  startTime = performance.now();
  console.log(startTime);
  
  id = setInterval(() => {
    let currentTime = performance.now();
    elapsedTime = savedElapse + (currentTime - startTime);
    updateDisplay(elapsedTime);
  }, 10);

  console.log(id);
});

pause.addEventListener("click", () => {
  if (id === null) {
    return;
  }
  clearInterval(id);
  id = null; // it represents no active interval
  savedElapse = elapsedTime;
});

reset.addEventListener("click", () => {
  clearInterval(id);
  id = null;
  elapsedTime = 0;
  savedElapse = 0;
  para.textContent = "00:00:00.000";
});

function updateDisplay(elapsedTime) {
  let seconds = Math.floor(elapsedTime / 1000);

  let rem_milliseconds = Math.floor(elapsedTime % 1000);

  let rem_millisecondsText = String(rem_milliseconds);

  rem_millisecondsText = rem_millisecondsText.padStart(3, "0");

  let minutes = Math.floor(seconds / 60);

  let rem_seconds = seconds % 60;

  let rem_secondsText = String(rem_seconds);
  rem_secondsText = rem_secondsText.padStart(2, "0");

  let hours = Math.floor(minutes / 60);

  let hoursText = String(hours);
  hoursText = hoursText.padStart(2, "0");

  let rem_minutes = minutes % 60;

  let rem_minutesText = String(rem_minutes);
  rem_minutesText = rem_minutesText.padStart(2, "0");

  para.textContent = `${hoursText}:${rem_minutesText}:${rem_secondsText}.${rem_millisecondsText}`;
}
