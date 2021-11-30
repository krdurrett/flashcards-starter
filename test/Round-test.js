const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let round;
  let deck;
  let turn;
  let card1;
  let card2;
  let card3;
  beforeEach(function() {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });
  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });
  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });
  it('should be able to store the current Deck at play', function() {
    expect(round.deck).to.be.an('object');
    expect(round.deck.cards).to.be.an('array');
  });
  it('should be able to return the first card in the deck as the current card at play', function() {
    expect(round.returnCurrentCard()).to.be.an('object');
    expect(round.returnCurrentCard()).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });
  it('should create a new instance of Turn when a guess is made', function() {
    let turn = round.takeTurn('object');

    expect(turn).to.be.an.instanceOf(Turn);
    expect(turn.guess).to.equal('object');
    expect(turn.card).to.be.an('object');
  })
  it.skip('should be able to track the number of turns', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn('object');

    expect(round.turns).to.equal(1);
  });
  it.skip('should move the next card in the Deck to be the current card when a guess is made', function() {
    round.takeTurn('object');

    expect(round.returnCurrentCard()).to.deep.equal({
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    });
  });
  it.skip('should evaluate guess and return feedback', function(){
    const round1 = round.takeTurn('object');
    const round2 = round.takeTurn('function');

    expect(round1).to.equal('correct!');
    expect(round2).to.equal('incorrect!');
  });
  it.skip('should be able to store incorrect guesses by card ID', function() {
    round.takeTurn('array');

    expect(round.incorrectGuesses).to.be.an('array');
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });
  it.skip('should be able to calculate the percentage of correct guesses', function() {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');

    expect(round.calculatePercentCorrect).to.equal(67);
  });
  it.skip('should be able to end the round and show the percentage of correct guesses', function() {
    round.takeTurn('object');
    round.takeTurn('function');
    round.takeTurn('mutator method');

    expect(round.endRound).to.equal('** Round over! ** You answered 67% of the questions correctly!')
  });
});
