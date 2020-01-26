'use strict';

describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('when initializing', function() {
    it('the score is 0', function() {
      expect(bowling.latestScore()).toEqual(0);
    });
  });
});
