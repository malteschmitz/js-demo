jQuery(function($){
  $('.tabs').each(function() {
    var tabs = [];
    var selected = 0;
    
    $('> div', this).each(function() {
      tabs.push({title: $('h2', this).hide().html(), element: this});
    });
    
    var generateTabbar = function() {      
      tabbar.html("");
      for (var i = 0; i < tabs.length; i++) {
        if (selected == i) {
          tabbar.append('<li class="active"><strong>' + tabs[i].title + '</strong></li>');
          $(tabs[i].element).removeClass('hidden');
        } else {
          tabbar.append('<li><a href="#">' + tabs[i].title + '</a></li>');
          $('a:last', tabbar).click(function(i) {
            return function() {
              selected = i;
              generateTabbar();
              return false;
            };
          }(i));
          $(tabs[i].element).addClass('hidden');
        }
      }
    }
    
    if (tabs.length > 0) {
      var html = '<div class="tabbar"><ul>';
      html += '</ul></div>';
      $(this).prepend(html);
      var tabbar = $('.tabbar ul', this);
      generateTabbar();
    }
  });
});