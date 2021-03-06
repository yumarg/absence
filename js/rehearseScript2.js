$(document).ready(function() {

	var showLine = false;

	enableForwardBackward();
	disableRepeat();

	var allIcons = document.getElementsByClassName("icon");
    for (var icon = 0; icon < allIcons.length; icon++) {
      allIcons[icon].style.color = themeColors.regular;
    }

	$(".actions div").hover(
		function() {
			if ($(this).hasClass("disabledButton")) {
				$(this).css("border", "2px solid " + themeColors.disabled);
			}
			else {
				$(this).css("border", "2px solid " + themeColors.regular);
			}
		},
		function() {
			if ($(this).hasClass("disabledButton")) {
				$(this).css("border", "2px solid " + themeColors.disabled);
			}
			else {
				$(this).css("border", "2px solid #fff");
			}
		}
	);

	$(".lineButton").hover(
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
    	window.location.href = "rehearseScript3.html";
	});

	$('.startrestart').click(function() {
		window.location.href = "rehearseScript1.html";
	});

	$('.lineButton').click(function() {
		if (showLine) {
			showLine = false;
			$(document.getElementsByClassName("line")[1]).html("[Say Your Line]");
    		$(".lineButton").html("Show My Line");
		}
		else {
			showLine = true;
    		$(document.getElementsByClassName("line")[1]).html("Shall I hear more, or shall I speak at this?");
    		$(".lineButton").html("Hide My Line");
    	}
	});
});

function enableForwardBackward() {
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

function disableRepeat() {
	$("#repeat").addClass("disabledButton");
	$("#repeat").removeClass("highlighted");
	$("#repeat i").addClass("disabled");
	$("#repeat i").removeClass("regular");	
}