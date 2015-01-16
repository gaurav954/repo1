var categoryModel = Backbone.Model.extend({
    initialize: function() {
        console.log("categoryModel initialized");
    },
    defaults: {
        CATEGORY: "",
        ID: ""
    }
});

var CategoriesModel = Backbone.Collection.extend({
    model: categoryModel,

    url: "http://localhost:8080/getcategory",

    getData: function(cbOnCategoryResp) {
        var self = this;
        this.fetch({
            success: function(categories) {
                console.log(categories);
                cbOnCategoryResp({ success: true });
            },
            error: function(e) {
                console.log(e);
                cbOnCategoryResp({ success: false });
            }
        });
    }
});