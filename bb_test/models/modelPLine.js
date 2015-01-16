var ProductLine = Backbone.Model.extend({
    defaults: {
        PRODUCT_LINE : "",
        ID: "",
        PARENT_SCATEGORY:''
    }
});

var PLineModel = Backbone.Collection.extend({
    model: ProductLine,

    url: "http://localhost:8080/getpline?PARENT_SCATEGORY=",    

    getData: function(parent, cbOnPline) {       
        this.url = this.url + parent;
        var self = this;
        this.fetch({
            success: function(PLineModel) {                
                cbOnPline({ success: true });
            },
            error: function(e) {
                console.error(e);
                cbOnPline({ success: false });
            }
        });
    }
});