var MakeGnomeDancer = class MakeGnomeDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.callCount = 0;
    this.$node = $('<span class="gnomeDancer animated"><img class="gnomeDancerImg animated" src="assets/mushroom-gnome.png"></img></span>');
    this.setPosition(top, left);
  }

  step() {
    MakeDancer.prototype.step.call(this);
  }
};
