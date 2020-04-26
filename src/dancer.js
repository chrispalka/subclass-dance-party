var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.pair = false;
};


MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // setTimeout(this.step.call(this), this.timeBetweenSteps);

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top + '%',
    left: left + '%'
  };
  this.$node.css(styleSettings);
};

//lineUp function
MakeDancer.prototype.lineUp = function() {
  this.$node.animate({
    'top': '420'
  });
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

