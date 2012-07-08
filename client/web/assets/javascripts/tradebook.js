/**
 *  Tradebook
 */
(function () {
  var T = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    return T.init.apply(T, args);
  };
  T.VERSION = '1.0.0';
  T.Views = T.Models = T.Collections = {};
  
  T.init = function() {
    
    return {};
  };
  

  window.Tradebook = T;
})();

