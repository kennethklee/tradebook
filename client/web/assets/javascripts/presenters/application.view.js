Tradebook.Views.Application = Backbone.View.extend({
  el: 'body',
  model: new Tradebook.Models.Application(),
  collection: new Tradebook.Models.Countries([{name: 'Canada'}]),
  
  render: function() {
    this.$('#front').html(Tradebook.Templates.front({countries: this.collection.toJSON()}));
    
    return this;
  },
  
  
});