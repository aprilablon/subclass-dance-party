var makeInflatableDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('inflated-dancer');
};

makeInflatableDancer.prototype = Object.create(makeDancer.prototype);
makeInflatableDancer.prototype.constructor = makeInflatableDancer;

makeInflatableDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if (this.$node.hasClass('inflated-dancer')) {
    this.$node.removeClass('inflated-dancer');
    this.$node.addClass('deflated-dancer');
    this.$node.css({top: this.top + 45, left: this.left + 45});
  } else {
    this.$node.removeClass('deflated-dancer');
    this.$node.addClass('inflated-dancer');
    this.$node.css({top: this.top, left: this.left});
  }
};