var OrbitalDancer = class OrbitalDancer extends Dancer {

  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.topVelocity = 0;
    this.leftVelocity = 0;
    this.top = top;
    this.left = left;
    this.$node.attr('src', 'http://pix.iemoji.com/twit33/0804.png');
  }

  step() {
    super.step();

    var closestNode = this.findClosest();
    this.topVelocity = this.topVelocity + (closestNode.top - this.top);
    this.leftVelocity = this.leftVelocity + (closestNode.left - this.left);

    this.top = this.top + this.topVelocity;
    this.left = this.left + this.leftVelocity;
    this.setPosition(this.top, this.left);
  }

  findClosest() {
    var distance;
    var closestNode = this;
    var closestDist = Math.pow($('body').width(), 2);
    for (var i = 0; i < window.dancers.length; i++) {
      if (this !== window.dancers[i]) {
        distance = this.calcDist(window.dancers[i]);
        if (distance < closestDist) {
          closestDist = distance;
          closestNode = window.dancers[i];
        }
      }
    }
    return closestNode;
  }

  calcDist(node) {
    return Math.sqrt(Math.pow(this.left - node.left, 2) + Math.pow(this.top - node.top, 2));
  }

  lineUp(index) {
    super.lineUp(index);
    this.topVelocity = 0;
    this.leftVelocity = 0;
  }
};