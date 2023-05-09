function createCard(id, question, answers, correctAnswer) {
  let card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer: correctAnswer
  }
  return card
}

function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    return "Correct!"
  } else {
    return "Incorrect!"
  }
}

function countDeck(cards) {
  let deck = []
  deck.push(cards)
  return deck.length
}

// function countDeck(deck) {
//   return deck.length
// }


module.exports = {
  createCard,
  evaluateGuess,
  // createDeck,
  countDeck
}