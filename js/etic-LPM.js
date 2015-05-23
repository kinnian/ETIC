// ------------------------- FRAME 1 ------------------------------------- //


//shows frame1 on click of the eye element 1
$("#button_frame1").click(function(){
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

//description of frame1 when hover of eye element
$("#button_frame1").hover(
	function()
	{
	    $(this).prepend( $( "<span>Arbre des débats</span>" ) );
  	}, function() {
    $( this ).find( "span:last" ).remove();
  	}
);

//return to the eye element; hide frame1
$("#button_eye1").click(function(){
	$("#frame1").animate({
		margin: "3%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	$("#eye").animate({
		opacity : 1,
		marginLeft: "45%",
		marginTop: "20%"
	}, 500, function() {
		//Animation complete
	});
	document.getElementById("frame1").style.display = "none";
});


// ------------------------- FRAME 2 ------------------------------------- //

//shows frame2 on click of the eye element
$("#button_frame2").click(function(){
	document.getElementById("frame2").style.display = "block";
	$("#eye").animate({
		opacity: 0,
		marginTop: "30%"
	}, 500, function() {
		//Animation complete
	});
	$("#frame2").animate({
		marginTop: "5%",
		opacity: 1,
		scrollTop: $("#frame2").offset().top
	}, 500, function() {
		//Animation complete
	});
});

//description of frame2 when hover of eye element
$("#button_frame2").hover(
	function()
	{
	    $( this ).prepend( $( "<span>Frise</span>" ) );
  	}, function() {
    $( this ).find( "span:last" ).remove();
  	}
);

//return to the eye element; hide frame1
$("#button_eye2").click(function(){
	$("#frame2").animate({
		marginTop: "3%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	$("#eye").animate({
		opacity : 1,
		marginTop: "20%"
	}, 500, function() {
		//Animation complete
	});
	document.getElementById("frame2").style.display = "none";
});


// ------------------------- FRAME 3 ------------------------------------- //

//shows frame2 on click of the eye element
$("#button_frame3").click(function(){
	document.getElementById("frame3").style.display = "block";
	$("#eye").animate({
		opacity: 0,
		marginTop: "30%",
		marginLeft: "20%"
	}, 500, function() {
		//Animation complete
	});
	$("#frame3").animate({
		marginTop: "5%",
		marginLeft: "50%",
		opacity: 1,
		scrollTop: $("#frame3").offset().top
	}, 500, function() {
		//Animation complete
	});
});

//description of frame2 when hover of eye element
$("#button_frame3").hover(
	function()
	{
	    $( this ).prepend( $( "<span>Truc</span>" ) );
  	}, function() {
    $( this ).find( "span:last" ).remove();
  	}
);

//return to the eye element; hide frame1
$("#button_eye3").click(function(){
	$("#frame3").animate({
		marginTop: "3%",
		marginLeft: "70%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	$("#eye").animate({
		opacity : 1,
		marginTop: "20%",
		marginLeft: "45%"
	}, 500, function() {
		//Animation complete
	});
	document.getElementById("frame3").style.display = "none";
});
