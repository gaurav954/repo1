var Product = Backbone.Model.extend({
    defaults: {
        PRODUCT: "",
        ID: "",
        PARENT_PLINE: ''
    }
});

var ProductsModel = Backbone.Collection.extend({
    model: Product,

    url: "http://localhost:8080/getproduct?PARENT_PLINE=",

    getData: function(parent, cbOnProduct) {
        this.url = this.url + parent;
        var self = this;
        this.fetch({
            success: function(productModel) {
                cbOnProduct({ success: true });
            },
            error: function(e) {
                console.error(e);
                cbOnProduct({ success: false });
            }
        });
    }
});