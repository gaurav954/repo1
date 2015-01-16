var cartListItems = Backbone.View.extend({
    tagName: 'li',
    className: 'div',
    events: {
        "click .remove": "remove"
    },
    
    utils: new Utils(),
    initialize: function() {
        this.utils.loadTemplate("templates/leftPaneCart.tpl", this.cartList.bind(this));
    },

    cartList: function(data) {
        var template = $.tmpl(data, this.model.toJSON());
        $(this.el).empty();
        $(this.el).html(template);
        $(this.el).find("img").attr("src", "images/" + this.model.get('SOURCE'));
    },

    remove: function() {
        this.collectionListView.trigger("removeItem", this.model);
    },

    close: function() {
        this.remove();
        this.unbind();
    }
});

var CartViewWrapper = Backbone.View.extend({
    el: "#cartShow",
    utils: new Utils(),
    cartView: null,
    events: {
        "click .cancel": "cancel",
        "click .cartOut": "login"
    },

    initialize: function() {
        this.utils.loadTemplate("templates/cart.tpl", this.cartDisplay.bind(this));
    },

    cartProducts: null,

    cartDisplay: function(template) {
        var totalBill = 0;
        this.model.forEach(function(m) {
            totalBill += parseInt(m.get('PRICE'));
        });

        var rData = {
            count: this.model.length,
            cartTotal: totalBill
        };

        var template = $.tmpl(template, rData);
        $(this.el).empty();
        $(this.el).html(template);
        var collectionModel = new ProductsModel(this.model);
        this.cartProducts = collectionModel;

        this.cartView = new Backbone.CollectionView({
            el: "#ulLeft",
            selectable: true,
            modelView: cartListItems,
            collection: collectionModel
        });

        this.cartView.on("removeItem", this.removeItem.bind(this));

        this.render();
    },
    render: function() {
        this.cartView.render();
    },

    removeItem: function(item) {
        this.cartView.collection.remove(item);
        this.trigger("removeItem", item);
    },

    cancel: function() {
        $(this.el).find("#overlay2").hide();
        $(this.el).find("#popup2").hide();
    },

    login: function() {
        $(this.el).find("#overlay2").hide();
        $(this.el).find("#popup2").hide();
        this.trigger("login", this.cartProducts);
    },

    close: function() {
        this.utils.closeWrapperViews(this.cartView);
        //  this.remove();
        this.unbind();
    }
});