const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function() {
  let round;
  let deck;
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
  it.skip('should be a function', function () {
    expect(Round).to.be.a('function');
  });
  it.skip('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });
  it.skip('should be able to store the current Deck at play', function() {
    expect(round.deck).to.be.an('object');
    expect(round.deck.cards)to.be.an('array');
  });
})
