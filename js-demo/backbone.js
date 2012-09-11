$(function() {

  var Customer = Backbone.Model.extend({});
  
  var CustomerCollection = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("CustomerCollection"),
    model: Customer
  });
  
  var CustomerView = Backbone.View.extend({
    tagName: 'tr',
    template: _.template($('#row-template').html()),
    initialize: function() {
      this.render();
      this.model.bind('destroy', this.deleteHandler, this);
    },
    events: {
      'click .delete': 'deleteClick'
    },
    deleteHandler: function(model, collection, options) {
      this.unbind();
      this.remove();
    },
    deleteClick: function() {
      this.model.destroy();
      return false;
    },
    render: function() {
      this.$el.html(this.template({
        customer: this.model
      }));
    }
  });
  
  var AppView = Backbone.View.extend({
    el: $('body'),
    collection: new CustomerCollection,
    initialize: function() {
      this.collection.bind('add', this.addOne, this);
      this.collection.bind('reset', this.addAll, this);
      this.collection.fetch();
    },
    addOne: function(customer) {
      var view = new CustomerView({model: customer});
      this.$('#main').append(view.el);
    },
    addAll: function() {
      this.collection.each(this.addOne);
    },
    events: {
      'click #create': 'create'
    },
    create: function() {
      var customer = new Customer;
      customer.set('given_name', this.$('#given_name').val());
      customer.set('last_name', this.$('#last_name').val());
      this.collection.add(customer);
      customer.save();
    }
  });
  
  var app = new AppView;

});