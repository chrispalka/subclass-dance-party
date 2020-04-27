var MakeBlinkyDancer = class MakeBlinkyDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }

  step() {
    MakeDancer.prototype.step.call(this);
    this.$node.toggle();
  }
};