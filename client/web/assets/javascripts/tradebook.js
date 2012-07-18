(function () {
  var T = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    
    return new T.Application(args);
  };

  T.VERSION = '1.0.0';
  T.Views = {};
  T.Models = {};
  T.Collections = {};
  
  T.DEBUG = true;
  
  T.Application = Backbone.View.extend({
    el: 'body',
    
    views: {},
    debug: true,
    
    initialize: function(options) {
      H.log('Application initialize');
      var opt = options || {};
      this.debug = opt.debug || T.DEBUG;
      this.router = new T.Router(this);
      
      for(var name in T.Views) {
        if (T.Views.hasOwnProperty(name)) {
          var View = T.Views[name];
          this.views[name] = new View();
          H.log('Loaded view ' + name);
          this.loadRoutes(this.views[name]);
        }
      }
      
      Backbone.history.start();
    },
    
    loadRoutes: function (view) {
      var routers = view.routes;
      var _view = view;
      
      for(var route in routers) {
        if (routers.hasOwnProperty(route)) {
          var _n = route;
          var _r = routers[route];
          this.router.route(route, route, function () {
            H.log('Routed to ', _n, _r);
            _view[_r].apply(_view, arguments);
            $.mobile.changePage(window.location.hash);
          });
        }
      }
    }

  });
  
  T.Router = Backbone.Router.extend({
      initialize: function(application) {
        H.log('Router initialize');
        this.application = application;
      }
  });
  
  
  var H = {
    log: function() {
      if ((this.debug || T.DEBUG) && console) {
        console.log(arguments);
      }
    }
  };
  T.Helpers = H;
  
  window.Tradebook = T;
})();
