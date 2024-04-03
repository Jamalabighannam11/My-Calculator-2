function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    var display = document.getElementById('display');
    if (value === '^') {
        display.value += '**';
    } else if (value === '%') {
        display.value += '/100';
    } else {
        display.value += value;
    }
}

function calculateSquareRoot() {
    var display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculateRec() {
    var display = document.getElementById('display');
    var num = parseFloat(display.value);
    if (num !== 0) {
        display.value = 1 / num;
    } else {
        display.value = "Error";
    }
}


function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

