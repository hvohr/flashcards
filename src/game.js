const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const {createRound } = require('../src/card');
const {createDeck, countCards } = require('../src/deck');
// const {endRound, takeTurn } = require('../src/round');

function printMessage(deck2) {
  const round1 = createRound(deck2)
  console.log(`Welcome to FlashCards! You are playing with ${countCards(round1.deck.cards)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const deck1 = createDeck(prototypeQuestions)
  printMessage(deck1)
  const round1 = createRound(deck1)
  printQuestion(round1)
 
}

module.exports = { start, printMessage, printQuestion };
