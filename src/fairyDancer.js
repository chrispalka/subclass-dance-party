var FairyDancer = function(top, left, timeBetweenSteps) {
  MakeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.callCount = 0;
  this.$node.append('<img src="assets/iridessa fairy.png" alt="iridessa fairy"/>'); //add img tag w/src, alt, and class
};

FairyDancer.prototype = Object.create(MakeBlinkyDancer.prototype);
FairyDancer.prototype.constructor = FairyDancer;

FairyDancer.prototype.step = function() {
  this.callCount++;
  var oldStep = MakeDancer.prototype.step.bind(this);
  oldStep();
  this.$node.toggle();
};