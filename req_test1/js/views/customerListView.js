define([
    "jquery",
    'underscore',
    'backbone',
    'models/customersModel',
    'libs/jquery/jquery-tmpl',
    'router'
], function($, _, Backbone, customersModel, tmpl,app_router) {

    var CustomerList = Backbone.View.extend({
        tagName: 'li',
        className: 'li',
        template: "<a href='' class='li' id=''></a>",
        initialize: function() {
            var tmpl = $.tmpl(this.template);
            this.$el.empty();
            this.$el.html(tmpl);
            this.$el.find("a").attr("id",this.model.get('id'));
            this.$el.find("a").attr("href", "#/" + this.model.get('name'));
            this.$el.find("a").text(this.model.get('name'));
            console.log("customer view initialized");
            this.$el.on('click', function() {
                app_router.navigate("customersDetails?id='this.model.get('id')", true);                
            });
        }
    });
    return CustomerList;
});

   