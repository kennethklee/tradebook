(function() {
  var T = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    
    var app = Backbone.Router.extend(Backbone.View.extend({
      el: 'body',
      model: new Tradebook.Models.Application(),
      routes: {
        menu: 'menu',
      },
      
      initialize: function() {
        console.log('whyyyyyyy');
        Tradebook.Helpers.log('app init');
        
        this.menu = new Tradebook.Views.Menu();
        
        this.start();
      },
      
      menu: function() {
        console.log('Menu!');
        this.menu.render();
        $.mobile.changePage(window.location.hash);
      }
    }));
    
    return new app(args);
  };

  T.VERSION = '1.0.0';
  T.Views = T.Models = T.Collections = {};
  
  T.DEBUG = true;
  
  var H = {
    log: function(obj) {
      if (Tradebook.DEBUG) {
        console.log(obj);
      }
    },
  };
  T.Helpers = H;
  
  window.Tradebook = T;
})();
