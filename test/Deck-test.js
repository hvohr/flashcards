const chai = require('chai');
const expect = chai.expect;

const { createCard, countDeck } = require('../src/card');

describe('deck', function () {
// it('should create a deck with an array of card objects', function () {
// const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
// const deck = countDeck(card1)
// expect(deck).to.equal([{ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: [ 'object', 'array', 'function' ], correctAnswer: 'object'}])
// });
it('should know how many cards are in the deck', function() {
  const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
  const deckNumber = countDeck(card1)
  expect(deckNumber).to.equal(1)
})
});