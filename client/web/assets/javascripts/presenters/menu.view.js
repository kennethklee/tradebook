Tradebook.Views.Menu = Backbone.View.extend({
  attributes: {
    'data-role' : 'page',
    'data-url'  : 'menu',
  },
  
  collection: new Tradebook.Models.Countries([{name: 'Canada'}]),
  
  initialize: function(router) {
    Tradebook.Helpers.log('registered menu');
    router.add('menu', this);
  },
  
  render: function() {
    this.$el.html(Tradebook.Templates.menu({countries: this.collection.toJSON()}));

    if (!$('[data-url=menu]').length) {
      $('body').append(this.el);
    }
    Tradebook.Helpers.log('rendered menu');
    return this;
  },
  
});