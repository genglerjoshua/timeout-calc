// Create a function to convert time input to decimal

//Create a function to reset the inputs when "Reset" is clicked
// reset.addEventListener("click", resetInputs);
$("#card-top").click(function () {
    $("#reg-input").val("");
    $("#ot-input").val("");
    $("#lunch-input").val("");
    $("#time-output").text("");
    console.log(alert)
});


// Create a function to calculate time out when "caclulate" is clicked
$("#card-bottom").click(function () {
    let [hours, minutes] = $("#lunch-input").val().split(":").map(Number);
    let clockIn = hours + (minutes / 60);
    let regTimeNum = parseFloat($("#reg-input").val());
    let otTimeNum = parseFloat($("#ot-input").val());

    let time = 40 - (regTimeNum + (otTimeNum * 1.5)) + clockIn;

    let hour = Math.floor(time);
    let decimalMinutes = (time - hour) * 60;
    let minute = Math.round(decimalMinutes);

    if ($("#reg-input").val() == "" || $("#ot-input").val() == "" || $("#lunch-input").val() == "") {
        $("#time-output").text("Blank Output")
        $("#time-output").css("color", "red");
    } else {
        let convertedTime = (hour > 12 ? (hour - 12) : hour) + ":" + (minute < 10 ? "0" : "") + minute + "PM";
        $("#time-output").css("color", "white")
        $("#time-output").text(convertedTime)
    }
});