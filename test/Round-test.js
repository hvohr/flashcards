const chai = require('chai');
const expect = chai.expect;

const { createCard, createDeck, createRound, takeTurn, evaluateGuess, calculatePercent } = require('../src/card');

describe('round object', function () {
  it('should be able to create a round object and properties', function () {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = createDeck(card1, card2)
    const currentCard = deck.cards[0]
    const turns = 0
    const incorrectGuesses = []
    const round = createRound(deck, currentCard, turns, incorrectGuesses);
    expect(round.deck).to.equal(deck);
    expect(round.currentCard).to.equal(currentCard);
    expect(round.turns).to.equal(turns);
    expect(round.incorrectGuesses).to.equal(incorrectGuesses);
  })
  it('should have the currentCard property start as first card in the deck', function () {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = createDeck(card1, card2)
    const round = createRound(deck);

    expect(round.currentCard).to.equal(deck.cards[0]);
  })
  it('should have a default turns property of 0', function () {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = createDeck(card1, card2)
    const round = createRound(deck);

    expect(round.turns).to.equal(0);
  })
  it('should have an empty array as default for incorrectGuesses', function () {
    const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = createDeck(card1, card2)
    const round = createRound(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
})
})
describe('takeTurn function', function () {
it('should store incorrect guesses in that property', function () {
  const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')  
  const deck = createDeck(card1, card2)
  const round = createRound(deck);
  const guess1 = 'array' 
  correctAnswer = card1.correctAnswer
  const result = evaluateGuess(guess1, correctAnswer)
  takeTurn(card1, result, round)
  expect(round.incorrectGuesses).to.deep.equal([card1.id])
})
it('should increment the turn count when correct', function () {
  const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')  
  const deck = createDeck(card1, card2)
  const round = createRound(deck);
  const guess1 = 'array' 
  correctAnswer = card1.correctAnswer
  const result = evaluateGuess(guess1, correctAnswer)
  takeTurn(card1, result, round)
  expect(round.turns).to.deep.equal(1)
})
it('should increment the turn count when incorrect', function () {
  const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')  
  const deck = createDeck(card1, card2)
  const round = createRound(deck);
  const guess1 = 'array' 
  correctAnswer = card1.correctAnswer
  const result = evaluateGuess(guess1, correctAnswer)
  takeTurn(card1, result, round)
  expect(round.turns).to.deep.equal(1)
})
it('should go to the next card after user guess', function () {
  const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')  
  const deck = createDeck(card1, card2)
  const round = createRound(deck);
  const guess1 = 'array' 
  correctAnswer = card1.correctAnswer
  const result = evaluateGuess(guess1, correctAnswer)
  takeTurn(card1, result, round)
  expect(round.currentCard).to.deep.equal(card2)
})
})
describe('calculate percent', function () {
  it('should calculate percent of correct answers', function () {
  const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const card2 = createCard(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method')  
  const deck = createDeck(card1, card2)
  const round = createRound(deck);
  var percentage = calculatePercent(round)
  expect(percentage).to.deep.equal("100%")

})
})