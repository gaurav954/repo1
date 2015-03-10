define([
    "jquery",
    'underscore',
    'backbone',
], function($,_,Backbone) {
    var CustomerDetailsModel = Backbone.Model.extend({
        initialize: function() {
            console.log("Customer Details Model Initialized");
        },


        url: function() { return "http://localhost:8080/customersDetails?id=" + this.get("id"); },

        getData: function(cbOnCustomersDetailsRes) {
            var self = this;
            this.fetch({
                success: function(data) {
                    cbOnCustomersDetailsRes({ success: true });
                },
                error: function(e) {
                    console.error(e);
                    cbOnCustomersDetailsRes({ success: false });
                }
            });
        }

    });

    return CustomerDetailsModel;
});