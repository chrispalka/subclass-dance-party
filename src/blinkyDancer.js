var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.callCount = 0;
  //this.$node.append(); //add img tag w/src, alt, and class in string
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  //this.callCount++;
  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();
  this.$node.toggle();
};

