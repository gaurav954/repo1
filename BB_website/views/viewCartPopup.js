var cartListItems = Backbone.View.extend({
    tagName: 'li',
    className : 'div',
    utils: new Utils(),
    initialize: function() {
        this.render();
    },

    events: {
        "click .remove" : "remove"    
    }, 
        
    render: function(){    
        this.utils.loadTemplate("templates/leftPaneCart.tpl", this.cartList.bind(this));
    },

    cartList: function(data) {
        var template = $.tmpl(data, this.model.toJSON());
        $(this.el).empty();
        $(this.el).html(template);
        $(this.el).find("img").attr("src", "images/" + this.model.get('SOURCE'));
    },
    
    remove : function(){
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

    events: {
        "click .cancel": "cancel"
    },

    initialize: function() {
        this.utils.loadTemplate("templates/cart.tpl", this.onCartLoad.bind(this));
    },

    cartListView: null,

    onCartLoad: function(data) {
        var val = 0;
        this.model.forEach(function(m) {
            val += parseInt(m.get('PRICE'));
        });
        var rData = {
            count: this.model.length,
            cartTotal: val
        };
        var template = $.tmpl(data, rData);
        $(this.el).empty();
        $(this.el).html(template);
        var collectionModel = new ProductModels(this.model);

        this.cartListView = new Backbone.CollectionView({
            el: "#ulLeft",
            selectable: true,
            modelView: cartListItems,
            collection: collectionModel
        });

        this.cartListView.on("removeItem", this.removeItem.bind(this));

        this.render();

    },

    render: function() {
        //  if (!this.cartListView) return;
        this.cartListView.render();

    },

    removeItem: function(item) {
        this.cartListView.collection.remove(item);
        this.trigger("removeItem", item);
    },

    cancel: function() {
        $(this.el).find("#overlay2").hide();
        $(this.el).find("#popup2").hide();
    },

    close: function() {
        //this.utils.closeWrapperViews(this.cartListView);
        //  this.remove();
          this.unbind();
    }
});