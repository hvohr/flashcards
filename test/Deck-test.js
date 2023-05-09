const chai = require('chai');
const expect = chai.expect;

const { createCard, countCards, createDeck } = require('../src/card');

describe('deck', function () {
it('should create a deck with an array of card objects', function () {
const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
const deck = createDeck(card1, card2)
expectedResult = ([card1, card2])
expect(deck.cards).to.equal(expectedResult)
});
it('should know how many cards are in the deck', function() {
  const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
  const deck = createDeck(card1, card2)
  const deckNumber = countCards(deck.cards)
  expect(deckNumber).to.equal(2)
})
});