var CategoryModel = Backbone.Model.extend({    
    defaults: {
        ID: 0,
        CATEGORY: ""
    }
});

var CategoriesModel = Backbone.Collection.extend({
    initialize: function() {
        console.log("Categories Collection Model initialized");
    },

    model: CategoryModel,

    url: "http://localhost:8080/getcategory",

    getData: function(cbOnCategoriesResponse) {
        var self = this;
        this.fetch({
            success: function(data) {
                console.log(data);
                cbOnCategoriesResponse({ success: true });
            },
            error: function(e) {
                console.log(e);
                cbOnCategoriesResponse({ success: false });
            }
        });
    }
});