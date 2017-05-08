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

	$('#backward').click(function() {
    	window.location.href = "rehearseScript1.html";
	});
	
	$('#forward').click(function() {
    	window.location.href = "rehearseScript4.html";
	});

	$('.lineButton').click(function() {
    	window.location.href = "rehearseScript3.html";
	});

});