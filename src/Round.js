const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess) {
    return new Turn(guess, this.returnCurrentCard());
  }
}

module.exports = Round;
