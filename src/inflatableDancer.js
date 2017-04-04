var InflatableDancer = class InflatableDancer extends Dancer {

  constructor (top, left, timeBetweenSteps) {
    super(top, left, Math.max(timeBetweenSteps, 250));
  }

  step() {
    // call the old version of step at the beginning of any call to this new version of step
    super.step();
    if (this.$node.attr('src') === 'https://static.pardus.at/img/std/128/foregrounds/wormhole.png') {
      this.$node.attr('src', 'http://a2.mzstatic.com/us/r30/Purple/v4/ff/af/4d/ffaf4d79-5780-1c5c-7056-91691b041c71/icon.175x175-75.png');
    } else {
      this.$node.attr('src', 'https://static.pardus.at/img/std/128/foregrounds/wormhole.png');
    }
  }
};