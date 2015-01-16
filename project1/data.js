$(document).ready(load);
var employee = {
    'fname': 'Gaurav',
    'lname': 'Sharma',
    'id': 'gs11',
    'email': 'gaurav954@gmail.com',
    'phone': '11111111',
    'city': 'pune'
};

var options = {
    url: "http://localhost:8080/writeemployee",
    type: "POST",
    data: employee,
    contentType: "application/json;charset=UTF-8",
    success: function(e) {
        console.log(employee);
        console.log("Data sent to server successfully")
    },
    error: function(e) { console.log("Error in sending the data " + Error.msg) }
};

var options1 = {
    url: "http://localhost:8080/getemployee",
    type: "GET",
    data: employee,
    contentType: "application/json;charset=UTF-8",
    success: function(e) {
        console.log(JSON.parse(e));
    },
    error: function(e) { console.log("Error in sending the data " + Error.msg) }
};

var options2 = {
    url: "http://localhost:8080/removeemployee",
    type: "POST",
    data: employee,
    contentType: "application/json;charset=UTF-8",
    success: function(e) {
        console.log("Data Edited Successfully");
    },
    error: function(e) { console.log("Error in sending the data " + Error.msg) }
};

function load() {
    $("#sendData").on("click", function() {
        $.ajax(options);
    });

    $("#bringData").on("click", function() {
        $.ajax(options1);
    });

    $("#remove").on("click", function() {
        $.ajax(options2);
    });
}