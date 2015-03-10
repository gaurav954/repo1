define([
    "jquery",
    'underscore',
    'backbone',
    'models/customersModel',
    'text!templates/home.htm'
], function($, _, Backbone, customersModel, customersTemplate) {

    var CustomerList = Backbone.View.extend({
        tagName: "li",
        className: "li",
        initialize: function() {
            // this.$el.html(customersTemplate, this.model.toJSON());
            console.log("customer view initialized");
        }
    });
    return CustomerList;
});

   