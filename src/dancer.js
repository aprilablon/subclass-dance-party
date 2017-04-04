// Creates and returns a new dancer object that can step
var Dancer = class Dancer {

  constructor (top, left, timeBetweenSteps) {
    this.time = timeBetweenSteps;
    this.top = top;
    this.left = left;
    this.$node = $('<img class="dancer"></img>');
    this.setPosition(top, left);
    this.step();
  }

  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.time);
  }

  setPosition(top, left) {
    this.top = top;
    this.left = left;
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.animate(styleSettings);
  }

  lineup(index) {
    this.setPosition(Math.floor((index * $('body').height()) / window.dancers.length), 0.25 * $('body').width());
  }

};