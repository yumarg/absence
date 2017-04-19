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
			$(this).css("border", "2px solid #FFF");
		}
	);


	$('.addScript').click(function() {
    	$('input[type=file]').trigger('click');
	});

	$('.viewScript').click(function() {
    	console.log('list of scripts');
    	window.location.href = "viewScript.html";
	});

	$('input[type=file]').on('change', function(){
		var file = $('input[type=file]').val();
		if (file.indexOf('.txt') !== -1)
			window.location.href = "addScript.html";
		else
			alert('Please upload a .txt file')
	});
});

