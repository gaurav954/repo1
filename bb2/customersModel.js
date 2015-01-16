var CustomersModel = Backbone.Collection.extend({
    initalize: function() {
        console.log("Customers Model initialized");
    },

    url: "http://localhost:8080/customers",

    getData: function(cbOnCustomersRes) {
        var self = this;
        this.fetch({
            success: function(data) {
                cbOnCustomersRes({success : true});
            },
            error: function(e) {
                console.error(e);
                cbOnCustomersRes({success : false});
            }
        });
    }
});

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