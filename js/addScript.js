$(document).ready(function() {

    var selected = $('#menu > ul > li').get(0);
    $(selected).css("background-color", themeColors.highlighted);

	var allIcons = document.getElementsByClassName("icon");
    for (var icon = 0; icon < allIcons.length; icon++) {
      allIcons[icon].style.color = themeColors.regular;
    }

    $('#menu > ul > li').click(function() {
        if (selected!=null){
            $(selected).css("background-color", "#FFF");
        }
        selected = this;
        $(this).css("background-color", themeColors.highlighted);
    });

    $('input[type=text]').click(function() {
        $(this).select()
    });

	$('.addScript').click(function() {
    	console.log('add '+ $('input[type=text]').val() +' with part '+ $(selected).text());
    	window.location.href = "scriptsMenu.html";
      
	});

});