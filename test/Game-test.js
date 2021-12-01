const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function(){
  let game;
  beforeEach(function() {
    game = new Game();
  })
  it('should be a function', function (){
    expect(Game).to.be.a('function');
  });
  it('should be an instance of Game', function(){
    expect(game).to.be.an.instanceOf(Game);
  });
  it('should be able to create cards', function(){
    game.start();

    expect(game.currentRound.deck.cards[0]).to.deep.equal({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
  });
  it('should be able to put the cards in a deck', function(){
    game.start();

    expect(game.currentRound.deck.cards).to.be.an('array');
    expect(game.currentRound.deck.cards.length).to.equal(30);
  });
  it('should create a new Round using the Deck', function(){
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
