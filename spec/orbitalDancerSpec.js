describe('orbitalDancer', function() {

  var orbitalDancer, orbitalDancer1, clock;
  var timeBetweenSteps = 250;
  window.dancers = [];

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    orbitalDancer = new OrbitalDancer(10, 20, timeBetweenSteps);
    window.dancers.push(orbitalDancer);
    orbitalDancer1 = new OrbitalDancer(20, 40, timeBetweenSteps);
    window.dancers.push(orbitalDancer1);
  });

  it('should have a jQuery $node object', function() {
    expect(orbitalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should update the position of the node', function() {
    var originalTop = orbitalDancer1.top;
    var originalLeft = orbitalDancer1.left;
    orbitalDancer1.step();
    var updateTop = orbitalDancer1.top;
    var updateLeft = orbitalDancer1.left;
    expect(originalTop).to.not.equal(updateTop);
    expect(originalLeft).to.not.equal(updateLeft);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(orbitalDancer, 'step');
      expect(orbitalDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(orbitalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(orbitalDancer.step.callCount).to.be.equal(2);
    });
  });
});