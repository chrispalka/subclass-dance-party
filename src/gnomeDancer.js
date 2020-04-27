var MakeGnomeDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.callCount = 0;
  this.$node = $('<span class="gnomeDancer flip"><a href="#" class="gnomeClick"><img class="gnomeDancerImg animated" src="assets/mushroom-gnome.png"></img></a></span>');
  this.setPosition(top, left);
};

MakeGnomeDancer.prototype = Object.create(MakeDancer.prototype);
MakeGnomeDancer.prototype.constructor = MakeGnomeDancer;


MakeGnomeDancer.prototype.swing = function() {

};





// MakeGnomeDancer.prototype.step = function() {
//   this.callCount++;
//   this.$node.slideDown();
// };
