(function() {
  var T = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    
    return new Tradebook.Application(args);
  };

  T.VERSION = '1.0.0';
  T.Views = T.Models = T.Collections = {};
  
  T.DEBUG = true;
  
  var R = function() {
    Tradebook.Helpers.log('router init');
    var _this = {
      _map: {},
      start: function() {
        $(document).live('pagebeforechange', function (event, data) {
          if (typeof data.toPage === 'string') {
            var hash = '#' + data.toPage.split('#')[1];	// Ensure we don't get full path
            if ($(hash).length === 0) {
              _this.handle(hash);
            }
          }
        });
        if ($(window.location.hash).length === 0) {	// No id's match the hash
          console.log('triggering change page');
          $.mobile.changePage(window.location.hash);
        }
      },
      add: function(name, view) {
        var result = null;
        if (this._map.hasOwnProperty(name)) {
          result = this._map[name];
        }
        this._map[name] = view;
        return result;
      },
      handle: function (hash) {
        Tradebook.Helpers.log(hash);
        var params = Tradebook.Helpers.hashToParams(hash);
        if (params && this._map.hasOwnProperty(params[0])) {
          this._map[params[0]].render();
        }
      }
    };

    return _this;
  }
  T.Router = R;

  var H = {
    log: function(obj) {
      if (Tradebook.DEBUG) {
        console.log(obj);
      }
    },
    hashToParams: function(hash) {
      return hash.match('#?/?(.*)')[1].split('/')
		},
    paramsToHash: function() {
      var params = [];
      if ($.isArray(arguments[0])) {
        params = arguments[0];
      } else {
        params = Array.prototype.slice.call(arguments, 0);
      }
      return '#/' + params.join('/');
    }
  };
  T.Helpers = H;
  
  window.Tradebook = T;

})();