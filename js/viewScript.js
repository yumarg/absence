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
			$(this).css("border", "none");
		}
	);

	$('.viewScript').click(function() {
    	console.log('see the script you selected');
    	//window.location.href = "next.html";
	});


	;(function(){
/**
The MIT License (MIT)

Copyright (c) 2015 Márcio Reis marcio.reis@outlook.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
$.fn.ScrollToValue = function(target){
    var $select = $(this);
    if (!$select.length) return;
    
    var value = target;
    
    //how many pixels is the select list scrolled from the moment we run this code???
    var distanceScrolledFromTop = $select.scrollTop();
    //how many pixels separate the top of the page from the <select> element that we pretend to manipulate
    var offsetSelect = $select.offset().top;
    //assuming a offset().top of 0 on our list how many pixels separate our target option from the top of the page? 
    var offsetElement = $select.find('[value=' + value + ']').offset().top + distanceScrolledFromTop;
    
    //Because the offset of our element is always bigger than the offset of our select box, we must subtract the offset of our target element by the offset of our list. That's it
    $select.scrollTop(offsetElement - offsetSelect);
}

})();


/*---------------------------------------------
DEMO
---------------------------------------------
*/
(function generateSelectBoxs(){
    var selects = "";
    var i = 0;
    while(i<100){
        i++;    
        selects += "<option value='" + i + "'>" + i + "</option>";    
    };

    $('.select1').html(selects);
    $('.select2').html(selects);
})();

$('form').on('submit', function(e){
    e.preventDefault();
    var value = $('input').val();

    /* 
        this:
        $('.select1').ScrollToValue(value);
        $('.select2').ScrollToValue(value);*/
    
    //or this:
    $('select').ScrollToValue(value);
})

$('form').trigger('submit');





});