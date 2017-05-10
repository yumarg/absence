$(document).ready(function() {
	var recording = false;
	var record = false;
	var playpause = false;
	var play = true;
	var save = false;
	console.log(sessionStorage.getItem("saved"));

	$(".close").hover(
		function() {
			$(".close").removeClass("fa-window-close-o");
			$(".close").addClass("fa-window-close");
		},
		function() {
			$(".close").removeClass("fa-window-close");
			$(".close").addClass("fa-window-close-o");			
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

	$(".play-pause").hover(
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

	$(".close").click(function() {
		$(".feedback").css("opacity", 0);
	});

	$(".record").click(function() {
		$(".feedback").css("opacity", 0);
		$(".play-pause").prop("title", "play audio");		
		if (document.getElementById("audioClip")) {
			document.getElementById("audioClip").pause();
			document.getElementById("audioClip").currentTime = 0;
		}
		if (!record) {
			record = true;
			pulse();
			playpause = false;
			disablePlayPause();
			disableSave();
			$(".play-pause").html("<i class='disabled fa fa-play' aria-hidden='true'><i>");			
		}
		else {
			record = false;
			recording = false;
		}
		if (!recording) {
			save = true;
			playpause = true;
			play = true;
		}	
	});

	$(".play-pause").click(function() {
		$(".feedback").css("opacity", 0);		
		if (playpause) {
			if (play) {
				$(".play-pause").html("<i class='regular fa fa-pause' aria-hidden='true'></i>");
				$(".play-pause").prop("title", "pause audio");				
				play = false;
				if (document.getElementById("audioClip") != null && !document.getElementById("audioClip").ended) {				
					document.getElementById("audioClip").play();					
				}
				else {
					$("#audioClip").remove();
					var audioElement = "<audio id='audioClip'><source src='audio/romeoLine.m4a' type='audio/mpeg'></audio>";
					$("body").append(audioElement);
					document.getElementById("audioClip").play();
					$(this).addClass("highlighted");
				}
				$("#audioClip").bind("ended", function () {
					$(this).removeClass("highlighted");
					$(".play-pause").html("<i class='regular fa fa-play' aria-hidden='true'><i>");
					$(".play-pause").prop("title", "play audio");
					play = true;
				});
			}
			else {
				play = true;
				$(".play-pause").html("<i class='regular fa fa-play' aria-hidden='true'><i>");
				$(".play-pause").prop("title", "play audio");
				document.getElementById("audioClip").pause();
			}
		}
	});

	$(".save").click(function() {
		if (save) {
			$(".feedback").css("opacity", 1.0);
			$(this).addClass("highlighted");			
			playpause = true;
			sessionStorage.setItem("saved", "true");
			enablePlayPause();	
		}
		console.log(sessionStorage.getItem('saved'));
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
			$(".play-pause").css("border", "2px solid " + themeColors.disabled);
		}
		else {		
			$(".record").addClass("highlighted");
			enableSave();
			enablePlayPause();
		}
	}	
});

function enablePlayPause() {
	$(".play-pause").removeClass("disabledButton");
	$(".play-pause").addClass("highlighted");
	$(".play-pause").css("border", "none");
	$(".play-pause i").removeClass("disabled");
	$(".play-pause i").addClass("regular");	
}

function disablePlayPause() {
	$(".play-pause").removeClass("highlighted");
	$(".play-pause").addClass("disabledButton");
	$(".play-pause i").removeClass("regular");
	$(".play-pause i").addClass("disabled");
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