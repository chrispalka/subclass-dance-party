var MakeButterflyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.callCount = 0;
  this.$node = $('<span class="butterflyDancer"><img class="butterflyDancerImg" src="assets/butterfly-yellow.gif"></img></span>');
  this.setPosition(top, left);
};

MakeButterflyDancer.prototype = Object.create(MakeDancer.prototype);
MakeButterflyDancer.prototype.constructor = MakeButterflyDancer;


MakeButterflyDancer.prototype.flip = function(top, left) {
  var flipSettings = {
    top: top,
    left: left
  };
  this.$node.css(flipSettings);
};
