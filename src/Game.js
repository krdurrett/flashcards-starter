const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = {};
  }
  start(){
    let cardArray = prototypeQuestions.map(card =>
      new Card (card.id, card.question, card.answers, card.correctAnswer)
    );
    let deck = new Deck(cardArray);
    let round = new Round(deck);
    this.currentRound = round;
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
