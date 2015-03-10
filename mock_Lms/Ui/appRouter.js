var afterLogin = function(data) {
    console.log(data);
    $(".loginBlock").addClass("hideLogin");
    $('#user').html(data.userId);
    $('.navlook').css('display', 'inherit');    
}

var loginFailed = function() {
    $(".invalid").css("display", "inherit");
    appRouter.navigate("", true);
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

var createMyLeaveWrapper = function(user) {
    this.createMyLeave = function(user) {
    this.myLeaveModel = new MyLeaveModel();        
    this.myLeaveModel.getData(user,this.onMyLeaveRes.bind(this));
    }

    this.onMyLeaveRes = function(res) {
        if (res.success) {
            console.log(this.myLeaveModel);
            this.myLeaveView = new MyLeaveView({ model: this.myLeaveModel });
            this.myLeaveView.render();
        }
    }

    this.createMyLeave(user);
}

var createApplyLeaveWrapper = function() {
    user = $("#username").val();
    $('.lms_right').css("display", "none");
    $(".applyleave_container").css("display", "inherit");
}