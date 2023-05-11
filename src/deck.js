function createDeck(newCards) {
  let deck = {
    cards: newCards
  }
  return deck
}

function countCards(deck) {
  return deck.length
}

module.exports = { countCards, createDeck };
