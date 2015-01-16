
$(document).ready(function(){
$(".container	-left").fadeOut(4000);
$(".mylist").on("click", onliAAclick);
for (var i = 0 ; i < 5 ; i++){
	printI(i);
}
});

function printI(i){
	console.log("This is i = " + i );
}
function onliAAclick(e){
	alert("my li click" )
	}