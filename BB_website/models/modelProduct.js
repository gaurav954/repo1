var ProductModel = Backbone.Model.extend({
    initialize: function() {
        console.log('Product Model initialized');
    },

    defaults: { 
        addedToCart : false
    }
});

var ProductModels = Backbone.Collection.extend({
    initialize: function() {
        console.log("Products model initialized");
    },

    model: ProductModel,

    url: "http://localhost:8080/getproduct?PARENT_PLINE=",

    getData: function(productLine, onCbProductModel) {
        var self = this;
        this.url = this.url + productLine;
        this.fetch({
            success: function(products) {
//                console.log(products);
                onCbProductModel({ success: true });
            },
            error: function(e) {
                console.error(e);
                onCbProductModel({ success: false });
            }
        });
    }
});