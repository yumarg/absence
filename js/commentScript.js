$(document).ready(function() {
    for (var i = 1; i < 5; i++) {
        if (sessionStorage.getItem("saved"+i) == "1") {
            $("#record-"+i).removeClass("disabled");
            $("#record-"+i).addClass("regular");
        }
    }        
});