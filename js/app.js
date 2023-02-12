var min = "00";
var sec = "00";
var miliSec = "00";
var timer;

// function for changing millisecond, second, minute
function callTimer() {
  miliSec++;
  if (miliSec < 100) {
    if (miliSec == 99) {
      miliSec = "00";
      sec++;
      if (sec == 60) {
        sec = "00";
        min++;
      }
    }
  } else {
    miliSec = "00";
  }
  document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}
// function for start the timer
function start() {
  document.getElementById("start").disabled = true;
  timer = setInterval(callTimer, 10);
}
// function to stop the timer
function stop() {
  document.getElementById("start").disabled = false;
  clearInterval(timer);
}
// function to reset the timer
function reset() {
  stop();
  min = "00";
  sec = "00";
  miliSec = "00";
  document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}
