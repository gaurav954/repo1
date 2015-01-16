var ShowLoginPage = Backbone.View.extend({
    el: "#login",
    utils: new Utils(),
    events: {
        "click #submit": "sendData"
    },
    initialize: function() {
        this.utils.loadTemplate("templates/login.tpl", this.login.bind(this));
    },

    login: function(template) {
        var tpl = $.tmpl(template);
        $(this.el).empty();
        $(this.el).html(tpl);

    },

    dataPacket: {},

    sendData: function() {
        var emailId = $(this.el).find("input").val();
        this.dataPacket = {
            email: emailId,
            products: this.model
        };
        this.trigger("loginData", this.dataPacket);
//    },

//    senditems: function() {
//        this.trigger("loginData", this.dataPacket);
    }
});