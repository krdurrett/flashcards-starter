const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function () {

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should store a users guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.guess).to.equal('object');
  });

  it('should store the current card at play', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.card).to.be.a('object');
    expect(turn.card).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object',
    });
  });

  it('should be able to return the users guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    const userGuess = turn.returnGuess();

    expect(userGuess).to.equal('object');
  });

  it('should be able to return the current card at play', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);

    const currentCard = turn.returnCard();

    expect(currentCard).to.deep.equal({
      id: 1,
      question: 'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object',
    });
  });

  it('should be able to track if the users guess matches the correct answer', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('array', card);
    const turn2 = new Turn('object', card);

    const guessOutcome1 = turn1.evaluateGuess();
    const guessOutcome2 = turn2.evaluateGuess();

    expect(guessOutcome1).to.be.false;
    expect(guessOutcome2).to.be.true;
  });

  it('should give feedback on whether or not the users guess is correct', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('array', card);
    const turn2 = new Turn('object', card);

    const feedbackTurn1 = turn1.giveFeedback();
    const feedbackTurn2 = turn2.giveFeedback();

    expect(feedbackTurn1).to.equal('incorrect!');
    expect(feedbackTurn2).to.equal('correct!');
  });
});
