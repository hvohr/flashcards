
const {evaluateGuess, calculatePercentCorrect} = require('../src/card');


function endRound(round) {
  console.log(round.incorrectGuesses)
  if (round.turns === 30) {
    return `Round over! You answered ${calculatePercentCorrect(round.incorrectGuesses)}% of the questions correctly!`
  }
}

function takeTurn(id, round) {
  var feedback1 = "Correct!"
  if (evaluateGuess(id, round.currentCard.correctAnswer) === 'Incorrect!') {
    round.incorrectGuesses.push(id)
    feedback1 = "Incorrect!"
  }
  round.turns++
  const index = round.deck.cards.indexOf(round.currentCard)
  round.currentCard = round.deck.cards[index + 1]
  return feedback1
}

module.exports = { endRound, takeTurn };
