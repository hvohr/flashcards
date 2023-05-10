const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('evaluate the answer', function () {

it('should evaluate guess and return correct response', function () {
  const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const guess = 'object'
  const correctAnswer = card.correctAnswer
  const evaluate = evaluateGuess(guess, correctAnswer) 

  expect(evaluate).to.equal("Correct!")
});
it('should evaluate guess and return incorrect response', function () {
  const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  const guess = 'array' 
  const correctAnswer = card.correctAnswer
  const evaluate = evaluateGuess(guess, correctAnswer)

  expect(evaluate).to.equal("Incorrect!")
});
});