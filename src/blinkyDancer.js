var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.callCount = 0;
  //this.$node.append(); //add img tag w/src, alt, and class
  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(top, left);

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  this.callCount++;
  MakeDancer.prototype.step.call(this);
  // console.log(this);
  this.$node.toggle();
};

