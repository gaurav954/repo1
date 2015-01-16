var CustomerView = Backbone.View.extend({
    tagName: "li",
    className: "vishal li",
    events: {
        "click": "onCustomerSelected"
    },
    initialize: function() {
        this.$el.text(this.model.get('name'));
    },

    onCustomerSelected: function() {
        this.collectionListView.trigger("customerSel", this.model);
        this.collectionListView.collection.remove(this.model);
    }
});


var CustomerListViewWrapper = Backbone.View.extend({
    customerListView: null,
    initialize: function() {
        this.customerListView = new Backbone.CollectionView({
            el: "#customersList",
            selectable: true,
            modelView: CustomerView,
            collection: this.model
        });
        this.customerListView.on("customerSel", this.onCustomerSelChange.bind(this));
        
    },

    render: function() {
        this.customerListView.render();  
    },

    onCustomerSelChange: function(selectedModel) {
        this.trigger("customerSel", selectedModel);
    }
});