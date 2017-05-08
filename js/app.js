var themeColors = {regular: "#610996", highlighted: "#be9ad3", disabled: "#838383"};
var themeFonts = {regular: "Lato"};
var saved = false;

$(document).ready(function() {
	$("#home").hover(
		function() {
			$("#home").html("<i class='regular fa fa-file-text-o' aria-hidden='true'></i><span style='color: #000; font-size: 20px'>&nbsp; Back to Script Menu</span>");
			$("#home").animate({"width": "250px"});	
			$("#home").css("opacity", 0.9);		
		},
		function() {			
			$("#home").html("<i class='regular fa fa-file-text-o' aria-hidden='true'></i>");
			$("#home").animate({"width": "140px"});			
		}
	);
});