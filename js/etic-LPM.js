

$("#eye").click(function(){
	$("#eye").animate({
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	$("#frame1").animate({
		margin: "10%",
		opacity: 1
	}, 500, function() {
		//Animation complete
	});
});

$("#button_eye").click(function(){
	$("#eye").animate({
		opacity : 1
	}, 500, function() {
		//Animation complete
	});
	$("#frame1").animate({
		margin: "3%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	})
})