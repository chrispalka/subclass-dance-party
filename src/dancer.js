class MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<span class="dancer"></span>');
    this.step();
    this.setPosition(top, left);
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top + '%',
      left: left + '%'
    };
    this.$node.css(styleSettings);
  }

  lineUp() {
    this.$node.animate({
      'top': '445'
    });
  }

  flip() {
    setTimeout(this.flip.bind(this), 1000);
  }
}

