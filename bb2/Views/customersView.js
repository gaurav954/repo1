var CustomersView = Backbone.View.extend({
    el: ".left-pane",
    utils: new Utils(),
    initialize: function() {
        console.log("Customers view initialized");
    },

    render: function() {
        this.utils.loadTemplate("customers.tpl", this.onTemplateLoaded.bind(this));
    },

    events: {
        "click .li": "onListClick"
    },

    onTemplateLoaded: function(data) {
        $(this.el).empty();
        $(this.el).html($(data));

        var allCustomers = this.model.models;
        for (var i = 0; i < allCustomers.length; i++) {
            var li = $('<li></li>');
            var customer = allCustomers[i];
            var id = customer.get('id');
            var name = customer.get('name');

            $(li).attr("id", "c" + id);
            $(li).addClass("li");
            $(li).attr("data-id", id);
            $(li).text(name);
            $(li).appendTo($(this.el));
        }
    },

    onListClick: function(e) {
        var customer = {
            "id" : parseInt($("#" + e.currentTarget.id).attr("data-id")),
            "name" : $("#" + e.currentTarget.id).text()
        };
        this.trigger("clickedOnList", customer);
    }
});