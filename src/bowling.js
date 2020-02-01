'use strict';

function Bowling() {
  this.score = 0
};

Bowling.prototype.latestScore = function() {
  return this.score;
};

Bowling.prototype.bowl = function(ball1, ball2) {
  return ball1 + ball2;
};

Bowling.prototype.addScore = function(frame) {
  return this.score += frame;
};
