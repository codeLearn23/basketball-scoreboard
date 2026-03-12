let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let newGame = document.getElementById("btn-new-game");

// let addButton = document.querySelectorAll(".btn-add");


//let addButton = document.querySelector(".btn-add");
let homeButtonOne = document.getElementById("home-add-one");
let homeButtonTwo = document.getElementById("home-add-two");
let homeButtonThree = document.getElementById("home-add-three");
let guestButtonOne = document.getElementById("guest-add-one");
let guestButtonTwo = document.getElementById("guest-add-two");
let guestButtonThree = document.getElementById("guest-add-three");

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

const homeAddOne = homeButtonOne.addEventListener("click", () => {
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

const homeAddTwo = homeButtonTwo.addEventListener("click", () => {
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

const homeAddThree = homeButtonThree.addEventListener("click", () => {
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

const guestAddOne = guestButtonOne.addEventListener("click", () => {
    guestCount += 1;
    guestScore.textContent = guestCount;  
    showNewGame();
})

/*
function guestAddOne() {
    guestCount += 1;
    guestScore.textContent = guestCount;  
    showNewGame();
}
*/

const guestAddTwo = guestButtonTwo.addEventListener("click", () => {
    guestCount += 2;
    guestScore.textContent = guestCount;
    showNewGame();
})

/*
function guestAddTwo() {
    guestCount += 2;
    guestScore.textContent = guestCount;
    showNewGame();
}
*/

const guestAddThree = guestButtonThree.addEventListener("click", () => {
    guestCount += 3;
    guestScore.textContent = guestCount;
    showNewGame();
})

/*
function guestAddThree() {
    guestCount += 3;
    guestScore.textContent = guestCount;
    showNewGame();
}
*/

const startNewGame = newGame.addEventListener("click", () => {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
    newGame.style.visibility ="hidden";
    refreshAddButtons();
})


/*
function startNewGame() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
    newGame.style.visibility="hidden";
    refreshAddButtons();
}
*/