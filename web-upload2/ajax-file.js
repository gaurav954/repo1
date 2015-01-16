
var categories = null;
var category = null;
var sub_category = null;
var sub_categories = null;
var product_line = null;
var proLine = null;
var product = null;
var products = null;



function load() {
    var options1 = {
        url: "http://localhost:8080/getcategory",
        type: "GET",
        data: category,
        contentType: "application/json;charset=UTF-8",
        success: function(e) {
         $.ajax(options2);
            console.log(JSON.parse(e));
            var cat = JSON.parse(e);
            categories = cat;
            var app = new App();
            app.createCategory();            
        },
        error: function(e) { console.log("Error in sending the data " + Error.msg) }
    };

    var options2 = {
        url: "http://localhost:8080/getsubcategory",
        type: "GET",
        data: sub_category,
        contentType: "application/json;charset=UTF-8",
        success: function(e) {
            $.ajax(options3);
            console.log(JSON.parse(e));
            var scat = JSON.parse(e);
            sub_categories = scat;
        },
        error: function(e) { console.log("Error in sending the data " + Error.msg) }
    };

    var options3 = {
        url: "http://localhost:8080/getpline",
        type: "GET",
        data: product_line,
        contentType: "application/json;charset=UTF-8",
            success: function(e) {
            $.ajax(options4);
            console.log(JSON.parse(e));
            var pLine = JSON.parse(e);
            proLine = pLine;
        },
        error: function(e) { console.log("Error in sending the data " + Error.msg) }
    };

    var options4 = {
        url: "http://localhost:8080/getproduct",
        type: "GET",
        data: product,
        contentType: "application/json;charset=UTF-8",
        success: function(e) {           
            console.log(JSON.parse(e));
            var pro = JSON.parse(e);
            products = pro;
        },
        error: function(e) { console.log("Error in sending the data " + Error.msg) }
    };
    
  $.ajax(options1); 
   
}
$(document).ready(load);