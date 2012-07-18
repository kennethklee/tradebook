Tradebook.Views.Menu = Backbone.View.extend({
  attributes: {
    'data-role' : 'page',
    'data-url'  : 'menu'
  },
  
  routes: {
    'menu': 'render'
  },
  
  initialize: function() {
    this.collection = new Tradebook.Models.Countries([{name: 'Canada'}]);
  },
  
  render: function() {
    this.$el.html(Tradebook.Templates.menu({countries: this.collection.toJSON()}));

    if (!$('[data-url=menu]').length) {
      $('body').append(this.el);
    }
    
    return this;
  }
  
});