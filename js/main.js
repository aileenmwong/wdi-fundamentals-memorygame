console.log("Up and Running!")
//Worked with Sarah Lund on Javascript

//Create an array to store all card objects
var cards = [
{
  card: 'queen',
  suit: 'hearts',
  cardImage: 'images/queen-of-hearts.png'
},
{
  card: 'queen',
  suit: 'diamonds',
  cardImage: 'images/queen-of-diamonds.png'
},
{
  card: 'king',
  suit: 'diamonds',
  cardImage: 'images/king-of-hearts.png'
},
{
  card: 'king',
  suit: 'diamonds',
  cardImage: 'images/king-of-diamonds.png'
},
];

//Create an array to store cards in play
var cardsInPlay = [];

//Check to see if cards match
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  } else {
  alert("Sorry, try again.");
  }
};

//Create a function to flip card
var flipCard = function () {
  //get data-id attribute of the card just clicked and store it in the variable cardID
  cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId])
  //Add cards to the end of the cardsInPlay array
  cardsInPlay.push(cards[cardId].card);
  //Display image of the card just clicked
  this.setAttribute('src', cards[cardId].cardImage);
  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call for checkForMatch
    checkForMatch();
  }
}

// Add a function create your board
var createBoard = function () {
  //Within the createBoard function, use a for loop to loop through the cards array
   for (var i = 0; i < cards.length; i++) {
    //Create an img element and store it in a variable cardElement
    var cardElement = document.createElement('img');
    //Add a src attribute for the back cardElement
    cardElement.setAttribute('src', 'images/back.png');
    //set the card's 'data-id' attribute to be the index of the current element, i
    cardElement.setAttribute('data-id', i);
    //add a click when the user clicks on a card
    cardElement.addEventListener('click', flipCard);
    //append the current cardElement to the game board
    document.getElementById('game-board').appendChild(cardElement);
    }
}

//Call for createBoard to create game board
createBoard();
