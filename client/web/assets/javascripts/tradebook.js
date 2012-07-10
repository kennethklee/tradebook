(function() {
  var T = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    var app = new Tradebook.Views.Application(args);
    return app.render();
  };

  T.VERSION = '1.0.0';
  T.Views = T.Models = T.Collections = {};
  
  window.Tradebook = T;

})();