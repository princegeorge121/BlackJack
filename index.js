let cards = [];
let isAlive=false;
let hasBlackJack=false
let sum;
let display;

let player={
    name:"jon",
    chips:150
}


let displayEl = document.getElementById("display-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let userEl = document.getElementById("user-el");
userEl.textContent=player.name+" $: "+player.chips;


function randomNos() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber > 10) {
        return 10;
    }
    else if (randomNumber ===1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}


function startGame() {
     let isAlive = true;
    let firstCard = randomNos();
    let secondCard = randomNos();
    cards.push(firstCard);
    cards.push(secondCard);
    cards;
    sum = cards[0] + cards[1];
    renderCard();
}


function renderCard() {

    if (sum < 21) {
        display = "Draw another card";
    }

    else if (sum === 21) {
        display = "Has BlackJack";
        hasBlackJack = true;
    }

    else {
        display = "You are out of the game";
        isAlive = false;
    }

    displayEl.textContent = display;
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent ="Cards: ";

    for(let i=0; i<cards.length; i++){
        cardEl.textContent+=cards[i]+" ";
    }
}


function drawCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdcard = randomNos();
        cards.push(thirdcard);
        sum += cards[2];
        renderCard();
    }
}