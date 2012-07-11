Tradebook.Application = Backbone.View.extend({
  el: 'body',
  model: new Tradebook.Models.Application(),
  
  initialize: function() {
    Tradebook.Helpers.log('app init');
    this.router = new Tradebook.Router();
    
    new Tradebook.Views.Menu(this.router);
    
    this.router.start();
  },
});