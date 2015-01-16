var appReady = function() {
    $("#testButton").on("click", function() {
            app_router.navigate('next2?q=abc&p=xyz', true, {data: "i am from button click"});
    });
}

var AppRouter = Backbone.Router.extend({
    routes: {
        "next": "next",
        "next2": "next2"
    },

    next: function(actions) {
        console.log("i am in next");
    },

    next2: function(val) {
        this.executeNext2();
        console.log(val);

    }
});
var app_router = new AppRouter;
Backbone.history.start();

$(document).ready(appReady);

AppRouter.prototype.executeNext2 = function() {
    console.log("executeNext2");
}