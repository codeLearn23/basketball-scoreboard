let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let newGame = document.getElementById("btn-new-game");
// let addButton = document.querySelectorAll(".btn-add");
let addButton = document.querySelector(".btn-add");

let homeCount = 0;
let guestCount = 0;
homeScore.textContent = homeCount;
guestScore.textContent = guestCount;

function showNewGame() {
    //let moreThanFifty = (homeCount > 50 || guestCount > 50);
    let moreThanFifty = (Math.abs(homeCount - guestCount) >= 50);
    //console.log(addButton.forEach(button => button));
    //moreThanFifty && addButton.forEach(button => button.disabled = true);
    //addButton.forEach(button => button.disabled) = moreThanFifty;
    if (moreThanFifty) {
        newGame.style.visibility="visible";
        addButton.forEach(button => button.disabled=true);
    }
}

function refreshAddButtons() {
    addButton.forEach(button => button.disabled = false);
}

const homeAddOne = addButton.addEventListener("click", () => {
    homeCount += 1;
    homeScore.textContent = homeCount;
    showNewGame();
})

/*
function homeAddOne() {
    homeCount += 1;
    homeScore.textContent = homeCount;  
    showNewGame();
}
*/

const homeAddTwo = addButton.addEventListener("click", () => {
    homeCount += 2;
    homeScore.textContent = homeCount;
    showNewGame();
})

/*
function homeAddTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
    showNewGame();
}
*/

const homeAddThree = addButton.addEventListener("click", () => {
    homeCount += 3;
    homeScore.textContent = homeCount;
    showNewGame();
})

/*
function homeAddThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
    showNewGame();
}
*/


function guestAddOne() {
    guestCount += 1;
    guestScore.textContent = guestCount;  
    showNewGame();
}

function guestAddTwo() {
    guestCount += 2;
    guestScore.textContent = guestCount;
    showNewGame();
}

function guestAddThree() {
    guestCount += 3;
    guestScore.textContent = guestCount;
    showNewGame();
}

function startNewGame() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
    newGame.style.visibility="hidden";
    refreshAddButtons();
}