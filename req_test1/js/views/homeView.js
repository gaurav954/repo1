define([
    "jquery",
    'underscore',
    'backbone',
    'models/customersModel',
    'views/customerListView'
], function($, _, Backbone, customersModel, CustomerList) {
    var HomeViewWrapper = Backbone.View.extend({
        customerListView: null,

        initialize: function() {
            this.customerListView = new Backbone.CollectionView({
                el: ".ul",
                selectable: true,
                modelView: CustomerList,
                collection: this.model
            });

        },

        render: function() {
            this.customerListView.render();
        },

        check: function() {
            alert("Checked");
        }
    });

    return HomeViewWrapper;
});