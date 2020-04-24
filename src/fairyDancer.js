var MakeFairyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.callCount = 0;
  this.$node = $('<span class="fairyDancer"><img class="fairyDancerImg" src="assets/iridessa-fairy.png" alt="iridessa-fairy"/></span>');
  this.setPosition(top, left);
};

MakeFairyDancer.prototype = Object.create(MakeDancer.prototype);
MakeFairyDancer.prototype.constructor = MakeFairyDancer;

// FairyDancer.prototype.step = function() {
//   this.callCount++;
//   var oldStep = MakeDancer.prototype.step.bind(this);
//   oldStep();
//   this.$node.toggle();
// };