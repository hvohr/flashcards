const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  printMessage()
  createCard()
  // evaluateGuess()
  createDeck(prototypeQuestions)
  console.log(createDeck(prototypeQuestions))
  countCards()
  createRound()
  printQuestion()
  takeTurn()
  calculatePercentCorrect()
  endRound()
}

module.exports = { start, printMessage, printQuestion };
