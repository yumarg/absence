$(document).ready(function() {

	enableForwardAndBackward();

	var allIcons = document.getElementsByClassName("icon");
    for (var icon = 0; icon < allIcons.length; icon++) {
      allIcons[icon].style.color = themeColors.regular;
    }

    $(".actions").css("width", 500);

	$(".actions div").hover(
		function() {
			$(this).css("border", "2px solid " + themeColors.regular);
		},
		function() {
			$(this).css("border", "2px solid #fff");
		}
	);

	$(".startrestart").hover(
		function() {
			$(this).css("border", "2px solid " + themeColors.regular);
		},
		function() {
			$(this).css("border", "2px solid #fff");
		}
	);	

	$('#backward').click(function() {
    	window.location.href = "rehearseScript1.html";
	});
	
	$('#forward').click(function() {
    	window.location.href = "rehearseScript4.html";    	
	});

	$('.startrestart').click(function() {
		window.location.href = "rehearseScript1.html";
	});

	$('.lineButton').click(function() {
    	window.location.href = "rehearseScript3.html";
	});

});

function enableForwardAndBackward() {
	$("#forward").removeClass("disabledButton");
	$("#forward").addClass("highlighted");
	$("#forward").css("border", "none");
	$("#forward i").removeClass("disabled");
	$("#forward i").addClass("regular");
	$("#backward").removeClass("disabledButton");
	$("#backward").addClass("highlighted");
	$("#backward").css("border", "none");
	$("#backward i").removeClass("disabled");
	$("#backward i").addClass("regular");
}