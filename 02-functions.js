document.writeln("Hallo Welt");
  
function rec(callback,i) {
  if (i == 1) {
    return 1;
  }
  return callback(i, rec(callback,i-1));
};

var add = function(a,b) {
  return a + b;
};

var mul = function(a,b) {
  return a * b;
}

document.writeln(rec(add,4));
document.writeln(rec(mul,4));