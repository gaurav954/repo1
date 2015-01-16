var ViewCart = Backbone.View.extend({
    el: "#cart",

    events: {
        "click": "showCart"
    },

    cartModels: [],

    initialize: function() {
        console.log("viewCart initialized");
        this.on("addItem", this.onCartAdd.bind(this));
        this.on("removeItem", this.onRemoveItem.bind(this));
    },

    onCartAdd: function(product) {
        var res = _.find(this.cartModels, function(model) { return model.get("ID") === product.get("ID"); });
        if (!_.isUndefined(res) ) {
            this.cartModels.push(product.clone());
        } else
            this.cartModels.push(product);
        this.$el.find("#count").text(this.cartModels.length);
    },

    onRemoveItem: function(product) {
        var rem = _.find(this.cartModels, function(itemR) { return itemR === product; });
        this.cartModels = _.filter(this.cartModels, function(item) { return item !== rem; });
        this.$el.find("#count").text(this.cartModels.length);
        this.showCart(this.cartModels);
    },

    showCart: function(cartModels) {
        this.trigger("onCartShow", this.cartModels);
    },

    close: function() {
    }
});