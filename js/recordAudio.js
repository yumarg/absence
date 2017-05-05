$(document).ready(function() {
	var recording = false;
	var record = false;
	var play = false;
	var save = false;

	$("#close").hover(
		function() {
			$("#close i").removeClass("fa-window-close-o");
			$("#close i").addClass("fa-window-close");
		},
		function() {
			$("#close i").removeClass("fa-window-close");
			$("#close i").addClass("fa-window-close-o");			
		}
	);

	$(".record").hover(
		function() {
			if ($(this).hasClass("highlighted")) {
				$(this).css("border", "2px solid " + themeColors.regular);
			}			
		},
		function() {
			$(this).css("border", "2px solid #fff");
		}
	);

	$(".save").hover(
		function() {
			if ($(this).hasClass("highlighted")) {
				$(this).css("border", "2px solid " + themeColors.regular);
			}
		},
		function() {
			if ($(this).hasClass("highlighted")) {
				$(this).css("border", "2px solid #fff");
			}
		}
	);

	$(".play").hover(
		function() {
			if ($(this).hasClass("highlighted")) {
				$(this).css("border", "2px solid " + themeColors.regular);
			}
		},
		function() {
			if ($(this).hasClass("highlighted")) {
				$(this).css("border", "2px solid #fff");
			}
		}
	);

	$(".pause").hover(
		function() {
			if ($(this).hasClass("highlighted")) {
				$(this).css("border", "2px solid " + themeColors.regular);
			}
		},
		function() {
			if ($(this).hasClass("highlighted")) {
				$(this).css("border", "2px solid #fff");
			}
		}
	);	

	$(".record").click(function() {
		if (document.getElementById("audioClip")) {
			document.getElementById("audioClip").pause();
			document.getElementById("audioClip").currentTime = 0;
		}
		if (!record) {
			record = true;
			pulse();
			play = false;
			disablePlay();
			disableSave();
			disablePause();
		}
		else {
			record = false;
			recording = false;
		}
		if (!recording) {
			save = true;
		}	
	});

	$(".play").click(function() {
		if (play) {
			$("#audioClip").remove();
			enablePause();
			var audioElement = "<audio id='audioClip'><source src='audio/romeoLine.m4a' type='audio/mpeg'></audio>";
			$("body").append(audioElement);
			document.getElementById("audioClip").play();
			$(this).addClass("highlighted");
			if (document.getElementById("audioClip").ended) {
				$(this).removeClass("highlighted");
			}
			save = false;
		}
	});

	$(".save").click(function() {
		if (save) {
			// pulse();
			$(this).addClass("highlighted");			
			play = true;
			saved = true;	
			enablePlay();	
		}
	});

	function pulse() {
		if (record) {
			recording = true;
			setTimeout(function() {
				$(".record").removeClass("highlighted");
				setTimeout(function() {
					$(".record").addClass("highlighted");
					pulse();
				}, 400);
			}, 400);
			$(".save").css("border", "2px solid " + themeColors.disabled);
			$(".play").css("border", "2px solid " + themeColors.disabled);
			$(".pause").css("border", "2px solid " + themeColors.disabled);
		}
		else {		
			$(".record").addClass("highlighted");
			enableSave();
		}
	}	
});

function enablePlay() {
	$(".play").removeClass("disabledButton");
	$(".play").addClass("highlighted");
	$(".play").css("border", "none");
	$(".play i").removeClass("disabled");
	$(".play i").addClass("regular");	
}

function disablePlay() {
	$(".play").removeClass("highlighted");
	$(".play").addClass("disabledButton");
	$(".play i").removeClass("regular");
	$(".play i").addClass("disabled");
}

function enablePause() {
	$(".pause").removeClass("disabledButton");
	$(".pause").addClass("highlighted");
	$(".pause").css("border", "none");
	$(".pause i").removeClass("disabled");
	$(".pause i").addClass("regular");	
}

function disablePause() {
	$(".pause").removeClass("highlighted");
	$(".pause").addClass("disabledButton");
	$(".pause i").removeClass("regular");
	$(".pause i").addClass("disabled");
}

function enableSave() {
	$(".save").removeClass("disabledButton");
	$(".save").addClass("highlighted");
	$(".save").css("border", "none");
	$(".save i").removeClass("disabled");
	$(".save i").addClass("regular");
}

function disableSave() {
	$(".save").removeClass("highlighted");
	$(".save").addClass("disabledButton");
	$(".save i").removeClass("regular");	
	$(".save i").addClass("disabled");	
}