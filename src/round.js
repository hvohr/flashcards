function endRound(round) {
  console.log(round.turns)
  if (round.turns === 30) {
    return `Round over! You answered ${calculatePercentCorrect()} of the questions correctly!`
  }
}

function takeTurn(card1, answer, round) {
  if (answer === 'Incorrect!') {
    round.incorrectGuesses.push(card1.id)
  }
  round.turns++
  const index = round.deck.cards.indexOf(card1)
  round.currentCard = round.deck.cards[index + 1]
}

module.exports = { endRound, takeTurn };
