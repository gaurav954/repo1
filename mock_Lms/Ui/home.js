var App_Router = Backbone.Router.extend({
    routes: {
        "login": "home",
        'LMS': 'showLms',
        'Lms_Home': "LmsHome",
        'my_leave': "my_leave",
        'apply_leave': 'applyLeave'
    },

    home: function(event) {
        //$("#submitLogin").on("click", function() {
        var u = $("#username").val();
        var v = $("#password").val();
        var userData = {
            username: u,
            password: v
        };

        var info = JSON.stringify(userData);

        $.ajax({
            url: "http://localhost:8080/login",
            type: "GET",
            data: { jsonData: info },
            dataType: 'json',
            success: function(data) {
                console.log(data.userId);
                appRouter.navigate('user=' + data.userId, true, data);
                afterLogin(data);
            },

            error: function(e) {
                loginFailed();
            }
        });
        // });
    },

    my_leave: function() {
        $('.lms_right').css("display", "inherit");
        $(".applyleave_container").css("display", "none");
    },

    LmsHome: function() {
        user = $("#username").val();
        console.log(user);
        $(".lms_container").css('display', 'inherit');
        createMyLeaveWrapper(user);
    },

    showLms: function() {
        $('.lmsHome').css('display', 'inherit');
        $('.buttonLms').on('click', function() {
            appRouter.navigate('Lms_Home', { trigger: true });
            $(".lmsHome").css('display', 'none');
        });
    },

    applyLeave: function() {
        createApplyLeaveWrapper();
        
    }
});

var user = null;
var appRouter = new App_Router();
Backbone.history.start();

