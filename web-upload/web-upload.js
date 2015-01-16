handleClick = function() {
$("#container1").addClass("hidden");
$("#container2").addClass("hidden");
$("#container3").addClass("hidden");
$("#container4").addClass("hidden");

    var value = $("#select :selected").val();    
        if (value === "category") {
            $("#container1").removeClass("hidden");
            $("#container1").appendTo($("#blank"));
        }else
            if (value === "sub-category") {
            $("#container2").removeClass("hidden");
            $("#container2").appendTo($("#blank"));
        }else
            if (value === "productline") {
            $("#container3").removeClass("hidden");
            $("#container3").appendTo($("#blank"));
        } else
            if (value === "product") {
            $("#container4").removeClass("hidden");
            $("#container4").appendTo($("#blank"));
        }   
}
     var init = function() {         
         $("#select").on("click", handleClick);
     }

onload = function() {
    init();
}
$(document).ready(onload);