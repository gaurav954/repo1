define([
    "jquery",
    'underscore',
    'backbone',
    'models/customersModel',
    'views/homeView'
], function($, _, Backbone, CustomersModel, HomeViewWrapper) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // Default
            'next': 'defautAction'
        },

        defautAction: function() {
            var modelsCustomer = new CustomersModel();
            modelsCustomer.getData(this.onCustomerRes.bind(this));
        },

        onCustomerRes: function(result) {
            if (result.success) {
                var homeView = new HomeViewWrapper({ model: result.model });
                homeView.check();
                homeView.render();                
            }
        }

    });

    var initialize = function() {
        var app_router = new AppRouter;
        Backbone.history.start();
        app_router.navigate("next", true);
    };



    return {
        initialize: initialize       
    };
});