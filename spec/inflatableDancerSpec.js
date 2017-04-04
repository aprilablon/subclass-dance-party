describe('inflatableDancer', function() {

  var inflatableDancer, clock;
  var timeBetweenSteps = 250;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    inflatableDancer = new InflatableDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(inflatableDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that alternates the source image', function() {
    var source1 = inflatableDancer.$node.attr('src');
    inflatableDancer.step();
    var source2 = inflatableDancer.$node.attr('src');
    expect(source1).to.not.equal(source2);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(inflatableDancer, 'step');
      expect(inflatableDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(inflatableDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(inflatableDancer.step.callCount).to.be.equal(2);
    });
  });
});