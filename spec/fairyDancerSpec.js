describe('fairyDancer', function() {

  var fairyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    fairyDancer = new MakeGnomeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fairyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have animated class', function() {
    expect(fairyDancer.$node[0].classList.contains('animated')).to.be.true;
  });
});
