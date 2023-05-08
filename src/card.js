function createCard(id, question, answers, correctAnswer) {
  var card = {
    id: id,
    question: question,
    answers: answers,
    correctAnswer
  }
  return card
}


module.exports = {
  createCard 
}