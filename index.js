var cards = [
    'ace of spades', 'ace of clubs', 'ace of hearts', 'ace of diamonds',
    'king of spades', 'king of clubs', 'king of hearts', 'king of diamonds',
    'queen of spades', 'queen of clubs', 'queen of hearts', 'queen of diamonds',
    'jack of spades', 'jack of clubs', 'jack of hearts', 'jack of diamonds',
    '10 of spades', '10 of clubs', '10 of hearts', '10 of diamonds',
    '9 of spades', '9 of clubs', '9 of hearts', '9 of diamonds',
    '8 of spades', '8 of clubs', '8 of hearts', '8 of diamonds',
    '7 of spades', '7 of clubs', '7 of hearts', '7 of diamonds',
    '6 of spades', '6 of clubs', '6 of hearts', '6 of diamonds',
    '5 of spades', '5 of clubs', '5 of hearts', '5 of diamonds',
    '4 of spades', '4 of clubs', '4 of hearts', '4 of diamonds',
    '3 of spades', '3 of clubs', '3 of hearts', '3 of diamonds',
    '2 of spades', '2 of clubs', '2 of hearts', '2 of diamonds',
    ];
    
var shuffledCards = shuffle(cards);
// loop over every card in the deck and switch its
// position with a random card in the array
function shuffle(arrayOfCards){
    // create variables to store the cards as we switch them
    
    var i = 0;
    var j = 0;
    var temporary = null;
    
    // create a for loop to go over every card in the array
    
    for (i = arrayOfCards.length -1; i > 0; i = i -1) {
        j = Math.floor(Math.random() * (i + 1))
        temporary = arrayOfCards[i];
        arrayOfCards[i] = arrayOfCards[j]
        arrayOfCards[j] = temporary
    }
    return arrayOfCards;
}

var player1 = {
    name: "Average Hamster",
    firstCard: "",
    secondCard: "",
    chips: 50000,
    bet: 0,
}
var player2 = {
    name: "Competitive Hamster",
    firstCard: "",
    secondCard: "",
    chips: 50000,
    bet: 0,
}
var player3 = {
    name: "Lucky Hamster",
    firstCard: "",
    secondCard: "",
    chips: 50000,
    bet: 0,
}
var player4 = {
    name: "Clever Hamster",
    firstCard: "",
    secondCard: "",
    chips: 50000,
    bet: 0,
}

var newGame = {
    deck: shuffledCards,
    players: [player1, player2, player3, player4],
    pot: 0,
};

function createNewGame() {
    
}

function dealCard(){
    var newCard = newGame.deck.pop();
    document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);
    return newCard;
}

function makeCardAppearInHandForPlayer1(){
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var player1Card1 = document.getElementById("player1-card-1");
    player1Card1.setAttribute("src", cardLocation);
    
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var player1Card2 = document.getElementById("player1-card-2");
    player1Card2.setAttribute("src", cardLocation);
}
document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);

function makeCardAppearInHandForPlayer2(){
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var player2Card1 = document.getElementById("player2-card-1");
    player2Card1.setAttribute("src", cardLocation);
    
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var player2Card2 = document.getElementById("player2-card-2");
    player2Card2.setAttribute("src", cardLocation);
}
document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);

function makeCardAppearInHandForPlayer3(){
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var player3Card1 = document.getElementById("player3-card-1");
    player3Card1.setAttribute("src", cardLocation);
    
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var player3Card2 = document.getElementById("player3-card-2");
    player3Card2.setAttribute("src", cardLocation);
}
document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);

function makeCardAppearInHandForPlayer4(){
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var player4Card1 = document.getElementById("player4-card-1");
    player4Card1.setAttribute("src", cardLocation);
    
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var player4Card2 = document.getElementById("player4-card-2");
    player4Card2.setAttribute("src", cardLocation);
}
document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);

function gatherBets(){
    pot()
    
    for (var i = 0; i < newGame.players.length; i++){
        var player = newGame.players[i]
        player.bet = 0
        var betNum = `bet${i + 1}`;
        var chipNum = `chips${i + 1}`;
        document.getElementById(betNum).innerHTML = `Bet: $${player.bet}`
        document.getElementById(chipNum).innerHTML = `Chips: $${player.chips}`
    }
}

function bet1(){
    var player1Bet = prompt("Average Hamster, bet a hamster amount.");
    player1.chips -= player1Bet;
    player1.bet = player1Bet;
    document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);
    document.getElementById("bet1").innerHTML = "Bet: " + "$" + player1.bet;
    document.getElementById("chips1").innerHTML = "Chips: " + "$" + player1.chips;
}
function bet2(){
    var player2Bet = prompt("Competitive Hamster, bet a hamster amount.");
    player2.chips -= player2Bet;
    player2.bet = player2Bet;
    document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);
    document.getElementById("bet2").innerHTML = "Bet: " + "$" + player2.bet;
    document.getElementById("chips2").innerHTML = "Chips: " + "$" + player2.chips;
}
function bet3(){
    var player3Bet = prompt("Lucky Hamster, bet a hamster amount.");
    player3.chips -= player3Bet;
    player3.bet = player3Bet;
    document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);
    document.getElementById("bet3").innerHTML = "Bet: " + "$" + player3.bet;
    document.getElementById("chips3").innerHTML = "Chips: " + "$" + player3.chips;
}
function bet4(){
    var player4Bet = prompt("Clever Hamster, bet a hamster amount.");
    player4.chips -= player4Bet;
    player4.bet = player4Bet;
    document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);
    document.getElementById("bet4").innerHTML = "Bet: " + "$" + player4.bet;
    document.getElementById("chips4").innerHTML = "Chips: " + "$" + player4.chips;
}

// function gatherBets(){
//     console.log("I am working")

//     pot();
    
//     player1.bet = 0
//     player2.bet = 0
//     player3.bet = 0
//     player4.bet = 0
    
//     document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);
// }

function pot(){
    var totalBetAmount = parseInt(player1.bet) + parseInt(player2.bet) + parseInt(player3.bet) + parseInt(player4.bet);
    document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);
    document.getElementById("haaaiii").innerHTML = "Pot: " + "$" + totalBetAmount;
}

function flop(){
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var firstCommunityCard = document.getElementById("game-card-1");
    firstCommunityCard.setAttribute("src", cardLocation);
    
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var secondCommunityCard = document.getElementById("game-card-2");
    secondCommunityCard.setAttribute("src", cardLocation);
    
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var thirdCommunityCard = document.getElementById("game-card-3");
    thirdCommunityCard.setAttribute("src", cardLocation);
}
document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);

function turn(){
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var turnCard = document.getElementById("game-card-4");
    turnCard.setAttribute("src", cardLocation);
}
document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);

function river(){
    var dealtCard = dealCard();
    var formattedCard = dealtCard.replace(" ", "_").replace(" ", "_");
    var cardLocation = "img/cards/" + formattedCard + ".png";
    var riverCard = document.getElementById("game-card-5");
    riverCard.setAttribute("src", cardLocation);
}
document.getElementById("json").innerHTML = JSON.stringify(newGame, undefined, 2);

function call(){
    
}

function raise(){
    
}

function fold(){
    
}

function allin(){
    
}








