$(function() {
  var h1 = $('h1');
  
  var foo = {
  	counter: 0,
  	clickHandler: function() {
  		this.counter++;
  		this.log.html('number of clicks: ' + this.counter);
  		return false;
  	}
  };
  
  foo.log = $('#log');
  
  h1.click($.proxy(foo.clickHandler,foo));
  
  var fake = $('<p><a href="#">FAKE</a></p>');
  var faker = $('a', fake);
  h1.after(fake);
  
  faker.click(function() {
  	foo.counter += 100;
  	return false;
  });
  
  var bar = (function() {
  	var counter = 0;
  	return {
  		dblclickHandler: function() {
  			counter++;
  			this.log.html('number of double clicks: ' + counter);
  			return false;
  		}
  	}
  }());
  bar.log = $('<p>nothing to see here, too</p>');
  $('#log').after(bar.log);
  
  h1.dblclick($.proxy(bar.dblclickHandler, bar));
});
