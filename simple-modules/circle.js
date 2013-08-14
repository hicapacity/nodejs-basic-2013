var PI = Math.PI;
function Circle(r) {
  this.r = r;
}

Circle.prototype.area = function() {
  return PI * this.r * this.r;
};

Circle.prototype.circumference = function() {
  return 2 * PI * this.r;
};

module.exports = Circle;
