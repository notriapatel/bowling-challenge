'use strict';

function Bowling() {
  this.score = 0
}

Bowling.prototype.latestScore = function() {
  return this.score;
};
