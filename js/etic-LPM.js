showFrame = function(id1, id2, varTopEye, varTopFrame, varLeft) {
	document.getElementById(id1).style.display = "inline-block";
	$(".footer").css("display", "none");
	$("#eye").animate({
		opacity: 0,
		marginLeft: varLeft,
		marginTop: varTopEye
	}, 500, function() {
		document.getElementById("eye").style.marginLeft = "-1%";
		document.getElementById("eye").style.marginTop = "20px";
		document.getElementById("eye").style.display = "none";
	});
	$(id2).animate({
		marginLeft: varLeft,
		marginTop: varTopFrame,
		opacity: 1
	}, 500, function() {
		var offset;
		offset = $(id2).offset().top
		$('html, body').stop().animate({
      		scrollTop: offset
    		}, 1000, function(){
    			//Animation complete
    	});
	});
};


hideFrame = function(id1, id2, varTopEye, varTopFrame, varLeft) {
	document.getElementById("eye").style.display = "inline-block";
	$(".footer").css("display", "block");
	document.getElementById(id1).style.display = "none";
	$(id2).animate({
		marginLeft: varLeft,
		marginTop: varTopFrame,
		opacity: 0
	}, 500, function() {
	});
	$("#eye").animate({
		opacity : 1,
		marginLeft: varLeft,
		marginTop: varTopEye
	}, 1000, function() {
		//Animation complete
	});
	$('html, body').stop().animate({
    	scrollTop: $("#menu").offset().top
    	}, 1000, function(){
    		//Animation complete
    });
};

reinitializeEye = function(varTop, varLeft) {
	document.getElementById("eye").style.marginTop = varTop;
	document.getElementById("eye").style.marginLeft = varLeft;
};

showConclusion = function(id1, id2, varLeft){
	document.getElementById("frame7").style.display = "block";
	document.getElementById(id1).style.display = "none";
	$('html, body').stop().animate({
		scrollTop: $("#frame7").offset().top
	}, 200, function(){
		//Animation complete
	});
	$("#frame7").animate({
		marginTop: "-=5%",
		opacity: 1
	}, 500, function() {
	});
	$(id2).animate({
		opacity: 0,
		marginTop: "-=5%",
		marginLeft: varLeft
	}, 500, function(){
		document.getElementById(id1).style.marginTop = "42%";
		if(id1=="frame4") {
			document.getElementById(id1).style.marginLeft = "3%";
		};
		if (id1=="frame5") {			
			document.getElementById(id1).style.marginLeft = "10%";
		};
		if (id1=="frame6") {			
			document.getElementById(id1).style.marginLeft = "20%";
		};
	});
};

hideConclusion = function(id1, id2, varLeft){
	document.getElementById(id1).style.display = "block";
	$(id2).animate({
		marginTop: "+=5%",
		marginLeft: varLeft,
		opacity: 1
	}, 500, function(){
		var offset;
		offset = $(id2).offset().top
		$('html, body').stop().animate({
      		scrollTop: offset
    		}, 1000, function(){
    			//Animation complete
    	});
	});
	$("#frame7").animate({
		marginTop: "+=5%",
		opacity: 0
	}, 500, function() {
		document.getElementById("frame7").style.display = "none";
		document.getElementById("frame7").style.marginTop = "20%";
		document.getElementById("frame7").style.marginLeft = "9%";
	});
};

reinitializeFrame = function(id, varTop, varLeft){	
	document.getElementById(id).style.marginTop = varTop;
	document.getElementById(id).style.marginLeft = varLeft;
};




// ------------------------- FRAME 1 ------------------------------------- //


//shows frame1 on click of the eye element 1
$("#button_frame1").click(function(){
	showFrame("frame1", "#frame1", "+=10%", "+=5%", "+=10%");
});


//return to the eye element; hide frame1
$("#button_eye1").click(function(){
	reinitializeEye("13%", "9%");
	hideFrame("frame1", "#frame1", "0px", "-=5%", "-=10%");
});


// ------------------------- FRAME 2 ------------------------------------- //

//shows frame2 on click of the eye element
$("#button_frame2").click(function(){
	showFrame("frame2", "#frame2", "+=10%", "+=5%", "+=0%");
});

//return to the eye element; hide frame2
$("#button_eye2").click(function(){
	reinitializeEye("13%", "-1%");
	hideFrame("frame2", "#frame2", "0px", "-=5%", "+=0%");
});


// ------------------------- FRAME 3 ------------------------------------- //

//shows frame2 on click of the eye element
$("#button_frame3").click(function(){
	showFrame("frame3", "#frame3", "+=10%", "+=5%", "-=10%");
});


//return to the eye element; hide frame3
$("#button_eye3").click(function(){
	reinitializeEye("13%", "-11%");
	hideFrame("frame3", "#frame3", "0px", "-=5%", "+=10%");
});


// ------------------------- FRAME 4 ------------------------------------- //


//shows frame4 on click of the eye element 4
$("#button_frame4").click(function(){
	showFrame("frame4", "#frame4", "-=10%", "-=5%", "+=10%");
});


//return to the eye element; hide frame4
$("#button_eye4").click(function(){
	reinitializeEye("-7%", "9%");
	hideFrame("frame4", "#frame4", "0px", "+=5%", "-=10%");
});

//display conclusion
$("#frame4to7").click(function(){
	showConclusion("frame4", "#frame4", "-=10%");
});


// ------------------------- FRAME 5 ------------------------------------- //

//shows frame5 on click of the eye element 5
$("#button_frame5").click(function(){
	showFrame("frame5", "#frame5", "-=10%", "-=5%", "+=0%");
});

//return to the eye element; hide frame5
$("#button_eye5").click(function(){
	reinitializeEye("-7%", "-1%");
	hideFrame("frame5", "#frame5", "0px", "+=10%", "+=0%");
});

//display conclusion
$("#frame5to7").click(function(){
	showConclusion("frame5", "#frame5", "-=0%");
});

// ------------------------- FRAME 6 ------------------------------------- //

//shows frame6 on click of the eye element
$("#button_frame6").click(function(){
	showFrame("frame6", "#frame6", "-=10%", "-=5%", "-=10%");
});


//return to the eye element; hide frame6
$("#button_eye6").click(function(){
	reinitializeEye("-7%", "-11%");
	hideFrame("frame6", "#frame6", "0px", "+=5%", "+=10%");
});

//display conclusion
$("#frame6to7").click(function(){
	showConclusion("frame6", "#frame6", "+=10%");
});


// ------------------------- FRAME 7 ------------------------------------- //

//return to frame 4
$("#return_frame4").click(function() {
	reinitializeFrame("frame4", "42%", "3%");
	hideConclusion("frame4", "#frame4", "+=10%");
});

//return to frame 5
$("#return_frame5").click(function() {
	reinitializeFrame("frame5", "42%", "10%");
	hideConclusion("frame5", "#frame5", "+=0%");

});

//return to frame 6
$("#return_frame6").click(function() {
	reinitializeFrame("frame6", "42%", "20%");
	hideConclusion("frame6", "#frame6", "-=10%");
});