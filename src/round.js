
const {evaluateGuess, calculatePercentCorrect} = require('../src/card')


function endRound(round) {
if (round.turns === 30) {
    console.log(`Round over! You answered ${calculatePercentCorrect(round)}% of the questions correctly!`)
    return true
  }
}

function takeTurn(card, round) {
  let feedback1 = "Correct!"
  if (evaluateGuess(card, round.currentCard.correctAnswer) === 'Incorrect!') {
    round.incorrectGuesses.push(card.id)
    feedback1 = "Incorrect!"
  }
  round.turns++
  const index = round.deck.cards.indexOf(round.currentCard)
  round.currentCard = round.deck.cards[index + 1]
  return feedback1
}

module.exports = { endRound, takeTurn };
