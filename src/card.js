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

function createDeck(card1, card2) {
  let deck = {
    cards: []
  }
  deck.cards.push(card1, card2)
  return deck
}

function countCards(deck) {
  return deck.length
}

function createRound(deck, currentCard = deck.cards[0], turns = 0, incorrectGuesses = []) {
  return {
    deck,
    currentCard,
    turns,
    incorrectGuesses
  }
}

function takeTurn(card1, answer, round) {
  if (answer === 'Incorrect!') {
    round.incorrectGuesses.push(card1.id)
    round.turns++
  } else {
    round.turns++
  }
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
}