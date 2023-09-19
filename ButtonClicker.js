//HTML elements

let clicksText = document.getElementById("clicks-text");
let clicksButton = document.getElementById("clicks-button");
let clicksPerSecText = document.getElementById("clicks-per-sec-text");
let cavemanButton = document.getElementById("caveman-button");
let saveButton = document.getElementById("save-button");
let resetButton = document.getElementById("reset-button");

//common variables

let clickPower = 1;
let clicksAmount = Math.trunc(JSON.parse(localStorage.getItem("clicksAmount")));
let clicksPerSec = JSON.parse(localStorage.getItem("clicksPerSec"));

//update text functions

function updateClicksAmount() {
  clicksText.innerText = `Clicks: ${Math.trunc(clicksAmount)}`;
}

function updateClickPerSecText() {
  clicksPerSecText.innerText = `CPS: ${clicksPerSec}`;
}

//click function

function clickForClicks(){
  clicksAmount += clickPower;
  updateClicksAmount();
}

clicksButton.addEventListener("click", clickForClicks);

//activate passive clicks

function passiveClicks() {
	if (clicksPerSec > 0) {
		setInterval(function () {clicksAmount += clicksPerSec;}, 1000);
    setInterval(function () {clicksText.innerText = `Clicks: ${Math.trunc(clicksAmount)}`}, 1000);
	}	
}

//save progress

function saveProgress() {
  JSON.stringify(localStorage.setItem("clicksAmount", clicksAmount));

  JSON.stringify(localStorage.setItem("clicksPerSec", clicksPerSec));
}

saveButton.addEventListener("click", saveProgress);

//reset progress

function resetProgress() {
  JSON.stringify(localStorage.setItem("clicksAmount", 0));
  clicksAmount = 0;
  clicksText.innerText = `Clicks: 0`;

  JSON.stringify(localStorage.setItem("clicksPerSec", 0));
  clicksPerSec = 0;
  updateClickPerSecText();
}

resetButton.addEventListener("click", resetProgress);

//loads saved values

updateClicksAmount();
updateClickPerSecText();
passiveClicks();






//the meaning of life is: waffles