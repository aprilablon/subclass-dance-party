var TipsyDancer = class TipsyDancer extends Dancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.attr('src', 'https://cdn.emojidex.com/emoji/px128/UFO.png?1417139067');
  }

  step() {
    // call the old version of step at the beginning of any call to this new version of step
    super.step();
    this.top = ((((Math.random() * 100) - 50) + this.top) + $('body').height()) % $('body').height();
    this.left = ((((Math.random() * 100) - 50) + this.left) + $('body').width()) % $('body').width();
    this.$node.animate({top: this.top, left: this.left});
  }
};