var GnomeDancer = function(top, left, timeBetweenSteps) {
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.callCount = 0;
  //this.$node.append(); //add img tag w/src, alt, and class
};

GnomeDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
GnomeDancer.prototype.constructor = GnomeDancer;

GnomeDancer.prototype.step = function() {
  this.callCount++;
  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();
  this.$node.toggle();
};