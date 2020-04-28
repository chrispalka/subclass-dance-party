var MakeButterflyDancer = class MakeButterflyDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="butterflyDancer animated"><img class="butterflyDancerImg" src="assets/butterfly-yellow.gif"></img></span>');
    this.setPosition(top, left);
    this.hue();
  }

  step() {
    MakeDancer.prototype.step.call(this);
  }

  hue() {
    this.$node.toggleClass('hue');
    setTimeout(this.hue.bind(this), 1000);
  }
};