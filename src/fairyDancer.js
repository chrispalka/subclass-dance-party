var MakeFairyDancer = class MakeFairyDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="fairyDancer"><img class="fairyDancerImg" src="assets/iridessa-fairy.png" alt="iridessa-fairy"/></span>');
    this.setPosition(top, left);
  }

  step() {
    MakeDancer.prototype.step.call(this);
  }
};