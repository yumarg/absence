$(document).ready(function() {

	enableBackward();
	enableRepeat();

	$("#audioClip").remove();
	var audioElement = "<audio id='audioClip'><source src='audio/julietSecondLine.m4a' type='audio/mpeg'></audio>";
	$("body").append(audioElement);
	document.getElementById("audioClip").play();	

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

	$(".startrestart").hover(
		function() {
			$(this).css("border", "2px solid " + themeColors.regular);
		},
		function() {
			$(this).css("border", "2px solid #fff");
		}
	);

	$('.startrestart').click(function() {
		window.location.href = "rehearseScript1.html";
	});	

	$('#backward').click(function() {
    	window.location.href = "rehearseScript2.html";
	});

	$('#repeat').click(function() {
		document.getElementById("audioClip").play();
	});	
});

function enableBackward() {
	$("#backward").removeClass("disabledButton");
	$("#backward").addClass("highlighted");
	$("#backward").css("border", "none");
	$("#backward i").removeClass("disabled");
	$("#backward i").addClass("regular");	
}

function enableRepeat() {
	$("#repeat").removeClass("disabledButton");
	$("#repeat").addClass("highlighted");
	$("#repeat").css("border", "none");
	$("#repeat i").removeClass("disabled");
	$("#repeat i").addClass("regular");		
}