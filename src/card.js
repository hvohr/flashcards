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

function countCards(deck) {
  console.log(deck)
}

function createDeck(cards) {
  var deck = {
    cards: cards
  }
  return deck
}





module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards
}