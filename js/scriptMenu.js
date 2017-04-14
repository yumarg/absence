$(document).ready(function() {
	var recording = false;
	var record = false;
	var play = false;
	var save = false;

	var allIcons = document.getElementsByClassName("icon");
    for (var icon = 0; icon < allIcons.length; icon++) {
      allIcons[icon].style.color = themeColors.regular;
    }

	$(".actions div").hover(
		function() {
			$(this).css("border", "2px solid " + themeColors.regular);
		},
		function() {
			$(this).css("border", "none");
		}
	);


	$('.addScript').click(function() {
		console.log('haha');
    	$('input[type=file]').trigger('click');

	});
/*
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
	});*/

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