//passive upgrades

let upgrade1 = {name:"upgrade1", level:0, cost:10, cps:1};
upgrade1 = JSON.parse(localStorage.getItem("upgrade1"));

//update functions

function updateCavemanText() {
  cavemanButton.innerText = `${upgrade1.level} Caveman \n Cost: ${upgrade1.cost} Clicks`;
}

//functions to buy each upgrade

function buyUpgrade1() {
  if (clicksAmount >= upgrade1.cost){
    upgrade1.level += 1;
    upgrade1.cost *= 1.15;
    clicksAmount -= upgrade1.cost;
    clicksPerSec += upgrade1.cps;
    passiveClicks();
    updateClickPerSecText();
    updateClicksAmount();
    updateCavemanText()
  }
}

cavemanButton.addEventListener("click", buyUpgrade1);

//save progress

function saveProgress() {
  localStorage.setItem("upgrade1", JSON.stringify(upgrade1));
}

saveButton.addEventListener("click", saveProgress);

//reset progress

function resetProgress() {
  localStorage.setItem("upgrade1", JSON.stringify(upgrade1 = {name:"upgrade1", level:0, cost:10, cps:1}));
  console.log(upgrade1);
  updateCavemanText();
}

resetButton.addEventListener("click", resetProgress);

//loads saved values

updateCavemanText();