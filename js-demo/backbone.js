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
      this.model.bind('destroy', this.destroyHandler, this);
      this.model.bind('sync', this.syncHandler, this);
    },
    events: {
      'click .delete': 'deleteClick',
      'click .edit': 'editClick'
    },
    destroyHandler: function() {
      this.unbind();
      this.remove();
    },
    syncHandler: function() {
      this.$('.given_name').html(this.model.escape('given_name')).
        effect("highlight", {color: '#00AA00'}, 1500);
      this.$('.last_name').html(this.model.escape('last_name')).
        effect("highlight", {color: '#00AA00'}, 1500);
    },
    deleteClick: function() {
      this.model.destroy();
      return false;
    },
    editClick: function() {
      this.trigger('edit', this.model);
    },
    render: function() {
      this.$el.html(this.template({
        customer: this.model
      }));
    }
  });
  
  var CreateDialogView = Backbone.View.extend({
    el: $('#createDialog'),
    initialize: function() {
      this.$el.hide();
      this.$el.dialog({
        autoOpen: false
      });
    },
    events: {
      'click button': 'done'
    },
    done: function() {
      this.$el.dialog('close');
      var customer = new Customer;
      customer.set('given_name', this.$('.given_name').val());
      customer.set('last_name', this.$('.last_name').val());
      this.trigger('created', customer);
    },
    execute: function() {
      this.$el.dialog('open');
    }
  });
  
  var EditDialogView = Backbone.View.extend({
    el: $('#editDialog'),
    customer: null,
    initialize: function() {
      this.$el.hide();
      this.$el.dialog({
        autoOpen: false
      });
    },
    events: {
      'click button': 'done'
    },
    done: function() {
      this.$el.dialog('close');
      this.customer.set('given_name', this.$('.given_name').val());
      this.customer.set('last_name', this.$('.last_name').val());
      this.customer.save();
    },
    execute: function(customer){
      this.customer = customer;
      this.$('.given_name').val(customer.get('given_name'));
      this.$('.last_name').val(customer.get('last_name'));
      this.$el.dialog('open');
    }
  });
  
  var AppView = Backbone.View.extend({
    el: $('body'),
    collection: new CustomerCollection,
    createDialog: new CreateDialogView,
    editDialog: new EditDialogView,
    initialize: function() {
      this.collection.bind('add', this.addOne, this);
      this.collection.bind('reset', this.addAll, this);
      this.createDialog.bind('created', this.created, this);
      this.collection.fetch();
    },
    created: function(customer) {
      this.collection.add(customer);
      customer.save();
    },
    addOne: function(customer) {
      var view = new CustomerView({model: customer});
      this.$('#main').append(view.el);
      view.bind('edit', this.edit, this);
    },
    edit: function(customer) {
      this.editDialog.execute(customer);
    },
    addAll: function() {
      this.collection.each(this.addOne, this);
    },
    events: {
      'click #create': 'create'
    },
    create: function() {
      this.createDialog.execute();
    }
  });
  
  var app = new AppView;

});