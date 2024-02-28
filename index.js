const regInput = document.getElementById('reg-input');
const otInput = document.getElementById('ot-input');
const lunchInput = document.getElementById('lunch-input');
const timeOutput = document.getElementById('time-output');
const reset = document.getElementById('card-top');
const calculate = document.getElementById('card-bottom');

// Create a function to convert time input to decimal

//Create a function to reset the inputs when "Reset" is clicked
reset.addEventListener("click", resetInputs);

function resetInputs() {
    regInput.value = '';
    otInput.value = '';
    lunchInput.value = '';
    timeOutput.textContent = '';
}

// Create a function to calculate time out when "caclulate" is clicked
calculate.addEventListener("click", calc);

function calc() {

    let [hours, minutes] = lunchInput.value.split(":").map(Number);
    let clockIn = hours + (minutes / 60);
    let regTimeNum = parseFloat(regInput.value);
    let otTimeNum = parseFloat(otInput.value);

    let time = 40 - (regTimeNum + (otTimeNum * 1.5)) + clockIn;

    let hour = Math.floor(time);
    let decimalMinutes = (time - hour) * 60;
    let minute = Math.round(decimalMinutes);

    if (regInput.value == "" || otInput.value == "" || lunchInput.value == "") {
        timeOutput.textContent = "Blank Input"
        timeOutput.style.color = "red";
    } else {
        let convertedTime = (hour > 12 ? (hour - 12) : hour) + ":" + (minute < 10 ? "0" : "") + minute + "PM";
        timeOutput.style.color = "white";
        timeOutput.textContent = convertedTime;
    }
};