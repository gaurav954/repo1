var Cart = Backbone.View.extend({
    el: "#cart",

    events: {
        "click": "showCart"
    },

    cartModels: [],

    initialize: function() {
        this.on("onAddCart", this.additem.bind(this));
        this.on("removeItem", this.onRemoveItem.bind(this));
    },

    onRemoveItem: function(product) {
        var rem = _.find(this.cartModels, function(itemR) { return itemR === product; });
        this.cartModels = _.filter(this.cartModels, function(item) { return item !== rem; });
        this.$el.find("#count").text(this.cartModels.length);
        this.showCart(this.cartModels);
    },

    additem: function(item) {
        var res = _.find(this.cartModels, function(model) { return model.get("ID") === item.get("ID"); });
        if (!_.isUndefined(res)) {
            this.cartModels.push(item.clone());
        } else
            this.cartModels.push(item);
        this.$el.find("#count").text(this.cartModels.length);
    },

    showCart: function(cartModels) {
        this.trigger("onCartShow", this.cartModels);
    }
});