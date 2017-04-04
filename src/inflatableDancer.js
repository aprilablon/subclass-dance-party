var makeInflatableDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, Math.max(timeBetweenSteps, 250));

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeInflatableDancer.prototype = Object.create(makeDancer.prototype);
makeInflatableDancer.prototype.constructor = makeInflatableDancer;

makeInflatableDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (this.$node.attr('src') === 'https://static.pardus.at/img/std/128/foregrounds/wormhole.png') {
    this.$node.attr('src', 'http://a2.mzstatic.com/us/r30/Purple/v4/ff/af/4d/ffaf4d79-5780-1c5c-7056-91691b041c71/icon.175x175-75.png');
    //this.$node.css({top: this.top + 45, left: this.left + 45});
  } else {
    this.$node.attr('src', 'https://static.pardus.at/img/std/128/foregrounds/wormhole.png');
    //this.$node.css({top: this.top, left: this.left});
  }
};