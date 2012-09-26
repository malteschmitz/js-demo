document.writeln("a:");
var a = [1,2,3,4];

function print(a) {
  _.each(a, function(e) {
    document.writeln(e);
  });
}

print(a);

document.writeln("\n\nb:");

var b = _.map(a, function(a) {
  return a * a;
});

print(b);