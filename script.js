//Count the number of clicks.
var count = 0;

var modal;
var span;
var btn;

//
function myTimer() {
	checkBest();
  var msg = "You clicked " + count + " times in 10 seconds. Your click speed is " + count/10 + " clicks per second."
  openModal()
  document.getElementById("clicks-msg").innerHTML = msg;
	alert("You clicked " + count + " times in 10 seconds. Your click speed is " + count/10 + " clicks per second.");
  clearInterval(myVar2);
	reset();
	resetColor();
  count = 0;
  document.getElementById("demo").innerHTML = "";
	document.getElementById("area").style.backgroundColor = "lightgrey";
	document.getElementById("area").style.borderColor = "black";
}

//This function begins the entire program.
function startFunction() {
	count++;
	createTimer(count);
	callColor();
  defineVars()
	document.getElementById("demo").innerHTML = "(Clicks: " + count + ")";
}

function defineVars() {
  // Get the modal
  modal = document.getElementById('myModal');

// Get the button that opens the modal
  btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];
}

//Create the timer for ten seconds.
function createTimer(num) {
	if(num == 1) {
		var myVar = setTimeout(myTimer, 2000); //game time 
		displayTime();
	}
}

//This variable contains an interval object.
var myVar2;

//Number of seconds to count down from.
var countDown = 10;

function displayTime() {
	myVar2 = setInterval(alertFunc, 1000);
}

//Decreases the count down by one.
function alertFunc() {
  countDown--;
	document.getElementById("area").innerHTML = countDown;
}

//Reset the speed clicking test.
function reset() {
	countDown = 10;
	document.getElementById("area").innerHTML = countDown;
}

//This variable contains an interval object.
var myVar3;

//This function changes the color of the number that displays the seconds left.
function callColor() {
    myVar3 = setInterval(changeColor, 1000);
}

//Change the color of the number that shows how many seconds you have left.
function changeColor() {
	if(countDown == 9) document.getElementById("area").style.color = "green";
	if(countDown == 8) document.getElementById("area").style.color = "green";
	if(countDown == 7) document.getElementById("area").style.color = "green";
	if(countDown == 6) document.getElementById("area").style.color = "yellow";
	if(countDown == 5) document.getElementById("area").style.color = "yellow";
	if(countDown == 4) document.getElementById("area").style.color = "yellow";
	if(countDown == 3) document.getElementById("area").style.color = "red";
	if(countDown == 2) document.getElementById("area").style.color = "red";
	if(countDown == 1) document.getElementById("area").style.color = "red";
}

//Set the number back to the color green.
function resetColor() {
	document.getElementById("area").style.color = "green";
}

//Track the best score.
var best = 0;

//Check to see if the click amount is better than the high score.
function checkBest() {
	if(count > best) {
    localStorage.setItem("record", count);
		best = count;
		document.getElementById("record").innerHTML = "Record: " + " (" + count/10 + " clicks per second)."
	}
}

// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}