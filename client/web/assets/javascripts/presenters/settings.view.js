Tradebook.Views.Settings = Backbone.View.extend({
  attributes: {
    'data-role' : 'page',
    'data-url'  : 'settings'
  },
  
  routes: {
    'settings': 'render'
  },
  
  render: function() {
    if (!this.$el.html()) {
      $('body').append(this.el);
    }
    return this;
  }
});