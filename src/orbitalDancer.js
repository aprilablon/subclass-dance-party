var makeOrbitalDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('orbital-dancer');
};

makeOrbitalDancer.prototype = Object.create(makeDancer.prototype);
makeOrbitalDancer.prototype.constructor = makeOrbitalDancer;

makeOrbitalDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  var closestNode = this.findClosest();

  this.top = this.top + (0.1 * (closestNode.top - this.top));
  this.left = this.left + (0.1 * (closestNode.left - this.left));

  this.$node.animate({top: this.top, left: this.left});
};

makeOrbitalDancer.prototype.findClosest = function() {
  var closestNode = this;
  var closestDist = Math.pow($('body').width(), 2);
  for (var i = 0; i < window.dancers.length; i++) {
    if (this !== window.dancers[i]) {
      var distance = this.calcDist(window.dancers[i]);
      if (distance < closestDist) {
        closestDist = distance;
        closestNode = window.dancers[i];
      }
    }
  }
  return closestNode;
};

makeOrbitalDancer.prototype.calcDist = function(node) {
  return Math.sqrt(Math.pow(Math.abs(this.left - node.left), 2) + Math.pow(Math.abs(this.top - node.top), 2));
};