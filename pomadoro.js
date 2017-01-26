
var bell = new Audio("./ship-bell.mp3");

var timer = null;

var display_message = function(message) {
   document.getElementById("messages").innerHTML = message;
}

var startTimer = function(minutes) {
  timer = setTimeout(endTimer, minutes * 60 * 1000);
}

var endTimer = function() {
  console.log("Ring the bell and stop timer");
  display_message("Pomadoro ended!");
  bell.play();
}

var pomadoro = function() {
  console.log("Doing a pomadoro");
  display_message("Pomadoro started!");
  startTimer(25);
}

var breaktime = function() {
  console.log("Enjoy your break!");
  display_message("Break time!");
  startTimer(5);
}

var stop = function() {
  clearTimeout(timer);
  console.log("Timer has been stopped");
  display_message("Uh oh, pomadoro stopped!");
}

