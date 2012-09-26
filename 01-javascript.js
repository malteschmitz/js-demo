var x = 12;
x = x +1;
document.writeln(x);
x = "Malte";
document.writeln(x);

var test = function(x) {
	return x*x;
}

function foo(fun) {
	return fun(3);
}

document.writeln(foo(test));
