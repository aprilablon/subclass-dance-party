var makeTipsyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.attr('src', 'https://cdn.emojidex.com/emoji/px128/UFO.png?1417139067');
};

makeTipsyDancer.prototype = Object.create(makeDancer.prototype);
makeTipsyDancer.prototype.constructor = makeTipsyDancer;

makeTipsyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.top = ((((Math.random() * 100) - 50) + this.top) + $('body').height()) % $('body').height();
  this.left = ((((Math.random() * 100) - 50) + this.left) + $('body').width()) % $('body').width();
  this.$node.animate({top: this.top, left: this.left});
};