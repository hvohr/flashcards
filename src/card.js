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
  var number = (100 -((round.incorrectGuesses.length/round.deck.cards.length) * 100))
  return `${number}%`
}

function endRound(round) {
  console.log(round.turns)
  if (round.turns === 30) {
    return `Round over! You answered ${calculatePercentCorrect()} of the questions correctly!`
  }
}


module.exports = {
  createCard,
  evaluateGuess,
  createRound,
  calculatePercentCorrect,
  endRound,
}