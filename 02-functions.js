// Lets write a recursive function
function fac(i) {
  if (i == 1) {
    return 1;
  }
  return i * fac(i-1);
};
// Now lets compute 4! = 4*3*2*1
document.writeln(fac(4)); // 24

// Now lets generalize the idea to handle
// \sum_{i=1}^x i instead of x! = \prod_{i=1}^x i, too. 
// Lets create a recursive function that accepts a callback function which is
// used to compute the multiplication in
// i * fac(i-1)
// or the addition in
// i + gauss(i-1)
function rec(callback,i) {
  if (i == 1) {
    return 1;
  }
  return callback(i, rec(callback,i-1));
};
// Now we need functions for multiplication and addition... 
var add = function(a,b) {
  return a + b;
};
var mul = function(a,b) {
  return a * b;
}
// and can test everything
document.writeln(rec(add,4));
document.writeln(rec(mul,4));

// PS: Yes, I know that it is much more efficient to do this:
function efficient_fac(x) {
  var result = 1
  for (var i = 2; i <= x; i++) {
    result *= i;
  }
  return result;
}
function efficient_gauss(x) {
  return x*(x+1)/2
}
document.writeln(efficient_fac(4)); // 1*2*3*4=24
document.writeln(efficient_gauss(4)); // 1+2+3+4=10