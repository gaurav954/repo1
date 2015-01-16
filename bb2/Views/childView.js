var ChildCustomerDetailsView = Backbone.View.extend({
    el: ".info",
    utils: new Utils(),
    initialize: function() {
        console.log("Customers details view initialized");
    },

    render: function() {
        this.utils.loadTemplate("detailChild.tpl", this.onCustDetailsLoaded.bind(this));
    },

    onCustDetailsLoaded: function(data) {
        var template = $(data).tmpl(this.model.toJSON());
        $(this.el).empty();
        $(this.el).html(template);
    }
});