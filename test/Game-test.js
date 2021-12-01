const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function(){
  let game;
  // let round;
  // let deck;
  // let turn;
  // let card1;
  // let card2;
  // let card3;
  beforeEach(function() {
    // card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    // card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    // card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    // deck = new Deck([card1, card2, card3]);
    // round = new Round(deck);
    game = new Game();
  })
  it('should be a function', function (){
    // const game = new Game();
    expect(Game).to.be.a('function');
  });
  it('should be an instance of Game', function(){
    expect(game).to.be.an.instanceOf(Game);
  });
  it.skip('should be able to create cards', function(){
    game.start();

    expect(game.currentRound.deck.cards[0]).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });
  it.skip('should be able to put the cards in a deck', function(){
    game.start();

    expect(game.currentRound.deck.cards).to.be.an('array');
    expect(gane.currentRound.deck.cards.length).to.equal(30);
  });
  it.skip('should create a new Round using the Deck', function(){
    game.start();

    expect(game.currentRound).to.be.an('object');
  });
  it('should keep track of the current round', function(){
    game.start();

    const round = game.currentRound;
    round.takeTurn('object');

    expect(game.currentRound.turns).to.equal(1);
  });
});
