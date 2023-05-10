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

function createDeck(card1, card2) {
  var deck = {
    cards: []
  }
  deck.cards.push(card1, card2)
  return deck
}

function countCards(deck) {
  return deck.length
}

function createRound(deck, currentCard = deck.cards[0], turns = 0, incorrectGuesses = []) {
  var round = {
    deck: deck,
    currentCard: currentCard,
    turns: turns,
    incorrectGuesses: incorrectGuesses
  }
  return round
}

function incorrectAnswer(guess, correctAnswer, round) {
  if (guess !== correctAnswer) {
    round.incorrectGuesses.push(guess)
    return round.incorrectGuesses
  }
}

function takeTurn(guess, round) {
  
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  incorrectAnswer
}