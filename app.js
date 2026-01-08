let homeEl = document.getElementById("home");
let guetEl = document.getElementById("guest");
let winnerEl = document.getElementById("displayWinner");
// let allActionButton = document.querySelector(".units");

let countHome = 0;
let countGuest = 0;

function addScoreToHome(num) {
  countHome += num;
  homeEl.textContent = countHome;
}

function addScoreToGuest(num) {
  countGuest += num;
  guetEl.textContent = countGuest;
}

function newGame() {
  countHome = 0;
  countGuest = 0;
  homeEl.textContent = countHome;
  guetEl.textContent = countGuest;
  winnerEl.textContent = "";
  enableButton();
}

function endGame() {
  if (countHome > countGuest) {
    winnerEl.textContent = "Home Team Wins";
  } else if (countHome < countGuest) {
    winnerEl.textContent = "Guest Team Wins";
  } else {
    winnerEl.textContent = "Its A Tie";
  }
  disableButton();
}

function disableButton() {
  document.querySelectorAll(".units").forEach((btn) => (btn.disabled = true));
  // const buttons = document.querySelectorAll(".units");
  // buttons.disabled = true;
}

function enableButton() {
  document.querySelectorAll(".units").forEach((btn) => (btn.disabled = false));
  // const buttons = document.querySelectorAll(".units");
  // buttons.disabled = false;
}
