// ------------------------- FRAME 1 ------------------------------------- //


//shows frame1 on click of the eye element 1
$("#button_frame1").click(function(){
	document.getElementById("frame1").style.display = "block";
	$("#eye").animate({
		opacity: 0,
		marginLeft: "50%",
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
		marginLeft: "35%",
		marginTop: "10%"
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

//return to the eye element; hide frame2
$("#button_eye2").click(function(){
	$("#frame2").animate({
		marginTop: "3%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	$("#eye").animate({
		opacity : 1,
		marginTop: "10%"
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

//return to the eye element; hide frame3
$("#button_eye3").click(function(){
	$("#eye").animate({
		opacity : 1,
		marginTop: "10%",
		marginLeft: "35%"
	}, 500, function() {
		//Animation complete
	});
	$("#frame3").animate({
		marginTop: "3%",
		marginLeft: "70%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	document.getElementById("frame3").style.display = "none";
});


// ------------------------- FRAME 4 ------------------------------------- //


//shows frame4 on click of the eye element 4
$("#button_frame4").click(function(){
	document.getElementById("frame4").style.display = "block";
	$("#eye").animate({
		opacity: 0,
		marginLeft: "50%",
		marginTop: "5%"
	}, 500, function() {
		//Animation complete
	});
	$("#frame4").animate({
		marginLeft: "10%",
		marginTop: "10%",
		opacity: 1,
		scrollTop: $("#frame4").offset().top
	}, 500, function() {
		//Animation complete
	});
});

//description of frame4 when hover of eye element 4
$("#button_frame4").hover(
	function()
	{
	    $(this).prepend( $( "<span>Argument 1</span>" ) );
  	}, function() {
    $( this ).find( "span:last" ).remove();
  	}
);

//return to the eye element; hide frame4
$("#button_eye4").click(function(){
	$("#frame4").animate({
		marginLeft: "3%",
		marginTop: "30%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	$("#eye").animate({
		opacity : 1,
		marginLeft: "35%",
		marginTop: "10%"
	}, 500, function() {
		//Animation complete
	});
	document.getElementById("frame4").style.display = "none";
});


// ------------------------- FRAME 5 ------------------------------------- //

//shows frame5 on click of the eye element 5
$("#button_frame5").click(function(){
	document.getElementById("frame5").style.display = "block";
	$("#eye").animate({
		opacity: 0,
		marginTop: "5%"
	}, 500, function() {
		//Animation complete
	});
	$("#frame5").animate({
		marginTop: "10%",
		opacity: 1,
		scrollTop: $("#frame5").offset().top
	}, 500, function() {
		//Animation complete
	});
});

//description of frame5 when hover of eye element
$("#button_frame5").hover(
	function()
	{
	    $( this ).prepend( $( "<span>Argument 2</span>" ) );
  	}, function() {
    $( this ).find( "span:last" ).remove();
  	}
);

//return to the eye element; hide frame5
$("#button_eye5").click(function(){
	$("#frame5").animate({
		marginTop: "30%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	$("#eye").animate({
		opacity : 1,
		marginTop: "10%"
	}, 500, function() {
		//Animation complete
	});
	document.getElementById("frame5").style.display = "none";
});


// ------------------------- FRAME 6 ------------------------------------- //

//shows frame6 on click of the eye element
$("#button_frame6").click(function(){
	document.getElementById("frame6").style.display = "block";
	$("#eye").animate({
		opacity: 0,
		marginTop: "5%",
		marginLeft: "20%"
	}, 500, function() {
		//Animation complete
	});
	$("#frame6").animate({
		marginTop: "10%",
		marginLeft: "50%",
		opacity: 1,
		scrollTop: $("#frame6").offset().top
	}, 500, function() {
		//Animation complete
	});
});

//description of frame6 when hover of eye element
$("#button_frame6").hover(
	function()
	{
	    $( this ).prepend( $( "<span>Argument 3</span>" ) );
  	}, function() {
    $( this ).find( "span:last" ).remove();
  	}
);

//return to the eye element; hide frame6
$("#button_eye6").click(function(){
	$("#frame6").animate({
		marginTop: "30%",
		marginLeft: "70%",
		opacity: 0
	}, 500, function() {
		//Animation complete
	});
	$("#eye").animate({
		opacity : 1,
		marginTop: "10%",
		marginLeft: "35%"
	}, 500, function() {
		//Animation complete
	});
	document.getElementById("frame6").style.display = "none";
});
