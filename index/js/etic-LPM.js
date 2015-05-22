
$("#eye").click(function(){
	document.getElementById("frame1").style.display = "block";
	$("#eye").animate({
		opacity: 0,
		marginLeft: "70%",
		marginTop: "30%"
	}, 500, function() {
		//Animation complete
	});
	$("#frame1").animate({
		marginLeft: "10%",
		marginTop: "5%",
		opacity: 1,
		scrollTop: $("#frame1").offset().top
	}, 500, function() {
		//Animation complete
	});
});

$("#button_eye").click(function(){
	$("#frame1").animate({
		margin: "3%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	$("#eye").animate({
		opacity : 1,
		marginLeft: "50%",
		marginTop: "20%"
	}, 500, function() {
		//Animation complete
	});
	document.getElementById("frame1").style.display = "none";
});