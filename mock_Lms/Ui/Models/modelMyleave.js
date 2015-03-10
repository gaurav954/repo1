var MyLeaveModel = Backbone.Model.extend({
    initialize: function() {
        console.log("My Leave Collection Model initialized");
    },

    url: "http://localhost:8080/myleave?user=",

    getData: function(user, cbOnPLineDetailsRes) {
        var self = this;
        this.url = this.url + user;
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