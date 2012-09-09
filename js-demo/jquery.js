$(function() {
  var h1 = $('h1');
  h1.click(function() {
  	h1.toggleClass('alerted');
  	return false;
  });
});
