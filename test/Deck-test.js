const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('deck', function () {
it('should create an array of card objects', function () {
const card1 = createCard((1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'))
const deck = createDeck([card1])
expect(deck).to.equal([(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')])
});
it('should know how many cards are in the deck', function() {
  const card1 = createCard((1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object'))
  const deck = createDeck([card1])
  const deckNumber = countDeck(deck)
  expect(deckNumber).to.equal(1)
})
});