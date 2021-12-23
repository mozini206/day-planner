


function setHour(currentHour, rowHour) {
    if ( currentHour < rowHour ) {
        $("#time" + rowHour).css("background-color", "#90EE90");
    } else if ( currentHour === rowHour ) {
        $("#time" + rowHour).css("background-color", "#FF6347");
    } else {
        $("#time" + rowHour).css("background-color", "#D3D3D3");
    }
}

function settask(hoursOfTheDay, rowHour) {
    $("#time" + rowHour).text(hoursOfTheDay[rowHour]);
}





$(document).ready(function () {
    var HourDay = localStorage.getItem("hoursOfTheDay");
    
    var hoursOfTheDay = JSON.parse(HourDay);

    if (hoursOfTheDay == null) {
        hoursOfTheDay = {
            9: "", 
            10: "",
            11: "",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "",
            17: ""
        };
    }



    
    var keys = Object.keys(hoursOfTheDay);
    for (var i = 0; i < keys.length; i++){
        settask(hoursOfTheDay, keys[i]);
    }

    var now = moment();
    var nowMoment = moment().format('dddd, MMMM Do, YYYY');

    var displayMoment = $('#today');
    displayMoment.text(nowMoment);

    var currentHour = now.hours();

    for (var i = 9; i <= 17; i++) {
        setHour(currentHour, i);
    }
    
    $('button').on('click', function () {
        var saveId = $(this).attr("id");

        var key = saveId.substring(4);



        var timeId = "time" + key;

        var textAreaInput = $("#" + timeId);

        var task = textAreaInput.val();

        hoursOfTheDay[key] = task;

        localStorage.setItem("hoursOfTheDay", JSON.stringify(hoursOfTheDay));
    });

});
