$(document).ready(function() {
	disableForward();
	disableRepeat();
	playing = false;

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

	$(".startrestart").click(function() {
		enableRepeat();
		playing = true;
		$("#audioClip").remove();
		var audioElement = "<audio id='audioClip'><source src='audio/julietFirstLine.m4a' type='audio/mpeg'></audio>";
		$("body").append(audioElement);
		document.getElementById("audioClip").play();
		$(this).html("Restart Rehearsing");
		document.getElementById("audioClip").onended = function() {
			playing = false;
			enableForward();
		};
	});

	$('#forward').click(function() {
		if (!$(this).hasClass("disabledButton")) {
			window.location.href = "rehearseScript2.html";
		}
	});	

	$('#repeat').click(function() {
		if (!$(this).hasClass("disabledButton")) {
			disableForward();
			$("#audioClip").remove();
			var audioElement = "<audio id='audioClip'><source src='audio/julietFirstLine.m4a' type='audio/mpeg'></audio>";
			$("body").append(audioElement);
			document.getElementById("audioClip").play();
			document.getElementById("audioClip").onended = function() {
				playing = false;
				enableForward();
			};			
		}
		else {
			disableForward();
		}
	});
});

function enableForward() {
	$("#forward").removeClass("disabledButton");
	$("#forward").addClass("highlighted");
	$("#forward").css("border", "none");
	$("#forward i").removeClass("disabled");
	$("#forward i").addClass("regular");	
}

function disableForward() {
	$("#forward").addClass("disabledButton");
	$("#forward").removeClass("highlighted");
	$("#forward i").addClass("disabled");
	$("#forward i").removeClass("regular");
	$("#forward").css("border", "2px solid " + themeColors.disabled);	
}

function enableRepeat() {
	$("#repeat").removeClass("disabledButton");
	$("#repeat").addClass("highlighted");
	$("#repeat").css("border", "none");
	$("#repeat i").removeClass("disabled");
	$("#repeat i").addClass("regular");	
}

function disableRepeat() {
	$("#repeat").addClass("disabledButton");
	$("#repeat").removeClass("highlighted");
	$("#repeat i").addClass("disabled");
	$("#repeat i").removeClass("regular");	
}