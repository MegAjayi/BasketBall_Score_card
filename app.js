let homeEl = document.getElementById("home");
let guetEl = document.getElementById("guest");
let count = 0;
let countGuest = 0;

function addOne() {
  count += 1;
  homeEl.textContent = count;
}

function addTwo() {
  count += 2;
  homeEl.textContent = count;
}

function addThree() {
  count += 3;
  homeEl.textContent = count;
  //   guetEl.textContent = count;
}

function addOneOne() {
  countGuest += 1;
  guetEl.textContent = countGuest;
}

function addTwoTwo() {
  countGuest += 2;
  guetEl.textContent = countGuest;
}

function addThreeThree() {
  countGuest += 3;
  guetEl.textContent = countGuest;
}

function newGame() {
  if (count > countGuest) {
    document.getElementById("extraButton").textContent =
      "The winner is Home with a score of: " + count;
  } else if (countGuest < count) {
    document.getElementById("extraButton").textContent =
      "The winner is Home with a score of: " + countGuest;
  } else {
    document.getElementById("extraButton").textContent =
      "Please increase the score on the score board to get a valid winner";
  }

  count = 0;
  countGuest = 0;
}
