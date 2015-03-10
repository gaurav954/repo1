define([
    "jquery",
    'underscore',
    'backbone',
    'router'
], function($, _, backbone, Router) {
    var initialize = function() {
        Router.initialize();
    };

    return {
        initialize : initialize
    };

});