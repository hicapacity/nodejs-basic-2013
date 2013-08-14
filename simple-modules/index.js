var Circle = require('./circle.js');
var r = 4;
var c = new Circle(r);
console.log(c.r);
console.log('The area of a circle of radius ' + r + ' is ' + c.area());
console.log('The circumference of a circle of radius ' + r + ' is ' + c.circumference());
