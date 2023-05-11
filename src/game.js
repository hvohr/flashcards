const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createCard, createRound, evaluateGuess, calculatePercentCorrect } = require('../src/card');
const {createDeck, countCards } = require('../src/deck');
// const {endRound, takeTurn } = require('../src/round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  // createCard()
  // evaluateGuess()
  var deck1 = createDeck(prototypeQuestions)
  printMessage(deck1)
  // countCards()
  var round1 = createRound(deck1)
  printQuestion(round1)
  // takeTurn()
  // calculatePercentCorrect()
  // endRound()
}

module.exports = { start, printMessage, printQuestion };
