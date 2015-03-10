define([
    "jquery",
    'underscore',
    'backbone',
], function() {
        var CustomerModel = Backbone.Model.extend({
            initalize: function() {
                console.log("Customer single Model initialized");
            },

            defaults: {
                id: 0,
                name: ""
            }
        });


    var CustomersModel = Backbone.Collection.extend({
        initalize: function() {
            console.log("Customers Model initialized");
        },

        model: CustomerModel,

        url: "http://localhost:8080/customers",

        getData: function(cbOnCustomersRes) {
            var self = this;
            this.fetch({
                success: function(data) {
                    cbOnCustomersRes({ success: true, model : self });
                },
                error: function(e) {
                    console.error(e);
                    cbOnCustomersRes({ success: false });
                }
            });
        }
    });
    return CustomersModel;
});
