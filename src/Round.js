const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentTurn;
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    this.currentTurn = new Turn(guess, currentCard);
    this.turns += 1;
    this.deck.cards.shift();
    if (this.currentTurn.evaluateGuess()) {
      return 'correct!';
    } else {
      this.incorrectGuesses.push(currentCard.id);
      return 'incorrect!';
    }
  }
  calculatePercentCorrect() {
    let numberCorrect = this.turns - this.incorrectGuesses.length;
    let percentageCorrect = (numberCorrect / this.turns) * 100;
    return Math.round(percentageCorrect);
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
