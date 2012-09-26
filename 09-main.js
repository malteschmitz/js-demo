// configure shortcut alias
require.config({
  paths: {
    jquery: 'libs/jquery',
    text: 'libs/text'
  },
  // jQuery has AMD support, but still creates the global
  // $ object in the window object.
});

require([
  'jquery',
  // load app module and pass it to our definition function
  '09-app'
  ], function($,app){
    $(function() {
      app.initialize();
    });
  });