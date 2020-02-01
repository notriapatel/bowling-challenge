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

  describe('returns a valid score', function() {
    it('of a frame (two balls)', function() {
      expect(bowling.bowl(1, 2)).toEqual(3);
    });

    it('returns a cumulative score', function() {
      var frame1 = bowling.bowl(1, 2);
      var frame2 = bowling.bowl(1, 2);
      bowling.addScore(frame1);
      bowling.addScore(frame2);
      expect(bowling.latestScore()).toEqual(6);
    }); 
  });
});

