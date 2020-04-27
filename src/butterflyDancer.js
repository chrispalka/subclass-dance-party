var MakeButterflyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.callCount = 0;
  this.$node = $('<span class="butterflyDancer"><img class="butterflyDancerImg animated" src="assets/butterfly-yellow.gif"></img></span>');
  this.setPosition(top, left);
  this.hue();
};

MakeButterflyDancer.prototype = Object.create(MakeDancer.prototype);
MakeButterflyDancer.prototype.constructor = MakeButterflyDancer;


MakeButterflyDancer.prototype.hue = function() {
  $(this.$node).toggleClass('hue');
  setTimeout(this.hue.bind(this), 1000);
};