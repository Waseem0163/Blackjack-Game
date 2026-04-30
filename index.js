let firstCard = 0
let secondCard = 0
let cards = []

let sum = 0
let hasBlackJack = false
let isAlive = false
let massege = ""

let massegeEl = document.getElementById("massege-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

// Starting the game
function startGame () {
    if(isAlive){
        alert("Please Complete the Game first")
    } else {
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        sum = firstCard + secondCard
        isAlive = true
        cards = [firstCard, secondCard]

        renderGame()
    }
}

// Getting random card
function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1

    return randomCard
}

// Rendring the card logic
function renderGame(){

    if(sum < 21){
        massege = "Do you want to draw a new card? "
    } else if (sum === 21) {
        massege = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        massege = "You're out of the game! "
        isAlive = false
    }

    cardEl.textContent = "Cards: " 
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum


    massegeEl.textContent = massege;
}

// Getting the new card
function newCard(){

    if(isAlive && !hasBlackJack){
        let thirdCard = getRandomCard()
        sum += thirdCard

        cards.push(thirdCard)

        renderGame()

    }
}