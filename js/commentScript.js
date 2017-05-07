$(document).ready(function() {
    if (sessionStorage.getItem("saved") != null) {
        if (sessionStorage.getItem("saved") == "true") {
            $($($($(".actorBody").find(".selectable")[1]).find("button")[0])[0]).removeClass("disabled");
            $($($($(".actorBody").find(".selectable")[1]).find("button")[0])[0]).addClass("regular");
        }
        else {
            $($($($(".actorBody").find(".selectable")[1]).find("button")[0])[0]).removeClass("regular");
            $($($($(".actorBody").find(".selectable")[1]).find("button")[0])[0]).addClass("disabled");      
        }
    }
    else {
        sessionStorage.setItem("saved", "false");
    }
});