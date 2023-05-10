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
  evaluateGuess()
  if (answer === 'Incorrect!') {
    round.incorrectGuesses.push(card1.id)
  }
  round.turns++
  const index = round.deck.cards.indexOf(card1)
  round.currentCard = round.deck.cards[index + 1]
}

function calculatePercent(round) {
  var number = (100 -((round.incorrectGuesses.length/round.deck.cards.length) * 100))
  return `${number}%`
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercent
}