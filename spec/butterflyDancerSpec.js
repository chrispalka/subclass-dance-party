describe('butterflyDancer', function() {

  var butterflyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    butterflyDancer = new MakeButterflyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(butterflyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have animated class', function() {
    expect(butterflyDancer.$node[0].classList.contains('animated')).to.be.true;
  });

  it('should have a hue function that adjusts hue at set interval', function() {
    sinon.spy(butterflyDancer.$node, 'toggleClass');
    butterflyDancer.hue();
    expect(butterflyDancer.$node.toggleClass.called).to.be.true;
  });
});