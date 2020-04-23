var GnomeDancer = function(top, left, timeBetweenSteps) {
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.callCount = 0;
};

GnomeDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
GnomeDancer.prototype.constructor = GnomeDancer;

GnomeDancer.prototype.step = function() {
  this.callCount++;
  MakeBlinkyDancer.prototype.step.call(this);
  this.$node.toggle();
};