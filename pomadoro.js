
var bell = new Audio("./ship-bell.mp3");

var timer = null;

var pomadoro_count = 0;
var break_count = 0;

var startTimer = function(minutes) {
  timer = setTimeout(endTimer, minutes * 60 * 1000);
}

var endTimer = function() {
  console.log("Ring the bell and stop timer");
  bell.play();
}

var pomadoro = function() {
  console.log("Doing a pomadoro");
  startTimer(25);
}

var breaktime = function() {
  console.log("Enjoy your break!");
  startTimer(5);
}

var stop = function() {
  clearTimeout(timer);
  console.log("Timer has been stopped");
}

