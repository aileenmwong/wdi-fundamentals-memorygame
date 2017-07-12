 console.log("Up and running!");

/*
var cardOne = "Queen"
var cardTwo = "Queen"
var cardThree = "King"
var cardFour = "King"
*/


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[2]) {
  alert("You found a match!");
  } else {
  alert("Sorry, try again.");
  }
};

var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId])
  cardsInPlay.push(cards[cardId]);

//If 2 cards are in play, cards will either match or prompt to play again
if (cardsInPlay.length === 2) {
checkForMatch();
}
};
flipCard(0);
flipCard(2);

  /*
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
*/
