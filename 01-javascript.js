// In this file we will introduce variables, if statements, for and while loops
// and simple functions. You might guess that this is an inline comment.
/* This is a block comment. */

// Variables do not have a fixed type in JavaScript. The are declared using
// the var keyword. If you leave out the var keyword the variable will be
// global.

// Global variables are'nt really variables but properties of the global
// object. In the context of a browser the global object is the window
// object which can be accessed using its own property window. You will
// see later that you can create a new property of an object just by assigning
// a value to it. So
x = 12;
// actually means window.x=12; Lets test it
document.writeln(window.x);

// You nearly never want a variable to become global! So lets declare a
// local variable
var x = 12;
x = x +1;
document.writeln(x);
// We use document.writeln, the writeln method of the document object (a
// property of the windows object). This writes code directly into the HTML
// document and can only be used in scripts which are loaded in the body.
// Normally scripts are loaded in the head and document.write(ln) cannot
// be used (and has strange effects).

// A variable does not have a type. Only its current value has a type.
// So you can change the type of a variable just by assigning another value
// to it. (Of cause this is not very good programming style.)
x = "Malte";
document.writeln(x);

// A variable does not have a type. Only its current value has a type.
// So you can change the type of a variable just by assigning another value
// to it. (Of cause this is not very good programming style.)
x = "Malte";
document.writeln(x);

// Variable scopes are different to many other languages. A variable
// declaration gets moved to the top of the current block (function body --
// nothing else) implicitly. So the variable a1 is not declared here and
// trying to read it will cause an error.
// document.writeln(a1); // will cause an error
// The variable a2 is declared here,
// and has the value undefined, because it gets declared later on in this block.
// Of cause the initialization of a2 takes place exactly where its written,
// therefore its value is defined up here.
document.writeln(a2); // undefined
// many things may happen here
var a2 = 42;
// now it has a value
document.writeln(a2); // 42

// if statements, for and while loops look very much like c or java:
if (x == 13) {
  document.writeln("Hallo")
}

// this loop
for (var i = 1; i < 5; i++) {
  document.write(i + ', ');
}
document.writeln(i);
// does the same as this one
i = 1;
while (i < 5) {
  document.write(i + ', ');
  i++;
}
document.writeln(i);

// You can declare functions like this.
function foo(fun) {
	return fun(3);
}
// Actually this was just a shorthand for var foo = function(fun) { ...
// This means functions are just values of variables like strings or objects.
// So lets write another function
var test = function(x) {
	return x*x;
}
// and pass it as an argument to the first one.
document.writeln(foo(test));

// The number of arguments a function has is very flexible. If yuo call if
// function with lesser arguments than declared the other arguments will
// stay undefined. If you call a function with more arguments then declared
// they will get ignored. (Not exacly, actually every function has an
// arguments object that acts like an array (but is none) and contains
// all the arguments the function gets called with.)