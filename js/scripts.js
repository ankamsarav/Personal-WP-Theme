jQuery(document).ready(function(){
	$(".imgcontain").mouseenter(function() {
		$(this).children(".hoverdiv").fadeIn(200);
	});
	$(".imgcontain").mouseleave(function() {
		$(this).children(".hoverdiv").fadeOut(200);
	});
});
