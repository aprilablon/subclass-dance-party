var BlinkyDancer = class BlinkyDancer extends Dancer {

  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.attr('src', 'http://icons.iconarchive.com/icons/harwen/weather/128/Sun-icon.png');
  }

  step() {
    // call the old version of step at the beginning of any call to this new version of step
    super.step();
    this.$node.toggle();
  }
};