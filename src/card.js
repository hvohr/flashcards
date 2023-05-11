
function createCard(id, question, answers, correctAnswer) {
  return {
    id,
    question,
    answers,
    correctAnswer
  }
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return "Correct!"
  } else {
    return "Incorrect!"
  }
}

function createRound(deck, currentCard = deck.cards[0], turns = 0, incorrectGuesses = []) {
  return {
    deck,
    currentCard,
    turns,
    incorrectGuesses
  }
}

function calculatePercentCorrect(round) {
  var number = (100 -(((round.incorrectGuesses.length)/(round.deck.cards.length)) * 100))
  return number
}

module.exports = {
  createCard,
  evaluateGuess,
  createRound,
  calculatePercentCorrect
}