var MakeButterflyDancer = class MakeButterflyDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="butterflyDancer"><img class="butterflyDancerImg" src="assets/butterfly-yellow.gif"></img></span>');
    this.setPosition(top, left);
  }

  step() {
    MakeDancer.prototype.step.call(this);
  }
};