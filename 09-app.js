define(['jquery', 'text!09-template.txt'], function($, template) {
	var app = {
		initialize: function() {
			var that = this;
			$('h1').each(function(){
				var el = $(this);
			    el.click(function() {
			    	that.magicAction(el);
			    });
			});
		},
		magicAction: function(element) {
			element.html(template);
		}
	};
	return app;
});
