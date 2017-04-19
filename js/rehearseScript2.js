$(document).ready(function() {

	var allIcons = document.getElementsByClassName("icon");
    for (var icon = 0; icon < allIcons.length; icon++) {
      allIcons[icon].style.color = themeColors.regular;
    }

	$(".actions div").hover(
		function() {
			$(this).css("border", "2px solid " + themeColors.regular);
		},
		function() {
			$(this).css("border", "2px solid #fff");
		}
	);

	$('.nextLine').click(function() {
    	window.location.href = "rehearseScript4.html";
	});

	$('.lineButton').click(function() {
    	window.location.href = "rehearseScript3.html";
	});

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