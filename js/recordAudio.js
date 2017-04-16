$(document).ready(function() {
	var recording = false;
	var record = false;
	var play = false;
	var save = false;

	$(".record").addClass("highlighted");

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

	$(".actions div").hover(
		function() {
			if ($($(this).find("i")[0]).hasClass("regular")) {
				$(this).css("border", "2px solid " + themeColors.regular);
			}
			else {
				$(this).css("border", "none");
			}
		},
		function() {
			$(this).css("border", "none");
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
			var audioElement = "<audio id='audioClip'><source src='audio/romeoLine.m4a' type='audio/mpeg'></audio>";
			$("body").append(audioElement);
			document.getElementById("audioClip").play();
			$(this).addClass("highlighted");
			if (document.getElementById("audioClip").ended) {
				$(this).removeClass("highlighted");
			}
			$(".record").addClass("highlighted");
			$(".save").removeClass("highlighted");
			save = false;
		}
	});

	$(".save").click(function() {
		if (save) {
			pulse();
			$(this).addClass("highlighted");			
			play = true;
			$(".record").addClass("highlighted");	
			enablePlay();		
		}
	});

	function pulse() {
		if (record) {
			recording = true;
			disableSave();
			disablePlay();
			setTimeout(function() {
				$(".record").removeClass("highlighted");
				setTimeout(function() {
					$(".record").addClass("highlighted");
					pulse();
				}, 400);
			}, 400);
		}
		else {
			enableSave();			
			$(".record").addClass("highlighted");
		}
	}	
});

function enablePlay() {
	$(".play i").removeClass("disabled");
	$(".play i").addClass("regular");	
}

function disablePlay() {
	$(".play").removeClass("highlighted");
	$(".play i").removeClass("regular");	
	$(".play i").addClass("disabled");
}

function enableSave() {
	$(".save i").removeClass("disabled");
	$(".save i").addClass("regular");
}

function disableSave() {
	$(".save").removeClass("highlighted");
	$(".save i").removeClass("regular");	
	$(".save i").addClass("disabled");	
}