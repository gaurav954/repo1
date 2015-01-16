var PLineModel = Backbone.Model.extend({
    initialize: function() {
        console.log('PLineModel model initalized');
    }   
});

var PLineModels = Backbone.Collection.extend({
    initialize: function() {
        console.log("Product Line Collection Model initialized");
    },

    model: PLineModel,
    
    url: "http://localhost:8080/getpline?PARENT_SCATEGORY=",

    getData: function(parent, cbOnPLineDetailsRes) {
        var self = this;
        this.url = this.url + parent;
        this.fetch({
            success: function(data) {
                cbOnPLineDetailsRes({ success: true });
            },
            error: function(e) {
                console.error(e);
                cbOnPLineDetailsRes({ success: false });
            }
        });
    }
});