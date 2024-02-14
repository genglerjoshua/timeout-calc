const regInput = document.getElementById('reg-input');
const otInput = document.getElementById('ot-input');
const lunchInput = document.getElementById('lunch-input');
const timeOutput = document.getElementById('time-output');

// Create a function to convert time input to decimal

// Create a function to calculate time out when "caclulate" is clicked

function() {
    // 40-(regular + (ot * 1.5)) + lunch clock in
    time = 40 - (regInput.value + (otInput.value * 1.5)) + lunchInput.value;

    timeOutput.textContent = time;
};