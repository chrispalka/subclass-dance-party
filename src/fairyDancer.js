var MakeFairyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.callCount = 0;
  this.$node = $('<span class="fairyDancer"><img class="fairyDancerImg" src="assets/iridessa-fairy.png" alt="iridessa-fairy"/></span>');
  this.setPosition(top, left);
};

MakeFairyDancer.prototype = Object.create(MakeDancer.prototype);
MakeFairyDancer.prototype.constructor = MakeFairyDancer;

MakeFairyDancer.prototype.flip = function(top, left) {
  var flipSettings = {
    top: top,
    left: left
  };
  this.$node.css(flipSettings);
};