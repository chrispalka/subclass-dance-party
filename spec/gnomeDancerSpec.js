describe('gnomeDancer', function() {

  var gnomeDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    gnomeDancer = new MakeGnomeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(gnomeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have animated', function() {
    // var gnomeClass = document.getElementsByClassName('animated');
    console.log(gnomeDancer);
    expect(gnomeDancer.$node[0].classList.contains('animated')).to.be.true;
  });
});
