var input = document.getElementById("input");
input.value = "0";
var result = 0;
var number = "0"; // Change to string to handle decimal point
let a = "0"; // Change to string to handle decimal point
let operator = "";

function calculate() {
    var numberElements = document.getElementsByClassName("operator");
    for (var i = 0; i < numberElements.length; i++) {
        var element = numberElements[i];
        element.classList.remove("selected");
    } var numberElements = document.getElementsByClassName("number");
        for (var i = 0; i < numberElements.length; i++) {
            var element = numberElements[i];
            element.classList.remove("numberPressed");
        }

    if (operator == "") {
        return;
    } else if (operator == "+") {
        number = parseFloat(a) + parseFloat(input.value);
        input.value = number;
        a = number.toString(); // Convert back to string to handle decimal point
    } else if (operator == "-") {
        number = parseFloat(a) - parseFloat(input.value);
        input.value = number;
        a = number.toString();
    } else if (operator == "*") {
        number = parseFloat(a) * parseFloat(input.value);
        input.value = number;
        a = number.toString();
    } else if (operator == "/") {
        number = parseFloat(a) / parseFloat(input.value);
        input.value = number;
        a = number.toString();
    }
}

function addOperator(o) {
    
    var numberElements = document.getElementsByClassName("operator");
    for (var i = 0; i < numberElements.length; i++) {
        var element = numberElements[i];
        element.classList.remove("selected");
    }

    
    var operatorElement = document.getElementById(o);
    if (operatorElement) {
        operatorElement.classList.add("selected");
        console.log(o)};

    operator = o;
    console.log(operator);
    a = input.value;
    number = "0";
}

function desimal() {
    if (!number.includes(".")) {
        number += ".";
        input.value = number;
    }
}

function addNumber(num) {
    var numberElements = document.getElementsByClassName("operator");
    for (var i = 0; i < numberElements.length; i++) {
        var element = numberElements[i];
        element.classList.remove("selected");
    }

    if (number === "0" || number === "-0") {
        number = num.toString();
    } else {
        number += num.toString();
    }
    input.value = number;
}

function changeSign() {
    number = (parseFloat(number) * -1).toString();
    input.value = number;
}

function clearInput() {
    var numberElements = document.getElementsByClassName("operator");
    for (var i = 0; i < numberElements.length; i++) {
        var element = numberElements[i];
        element.classList.remove("selected");
    }  

    input.value = "0";
    number = "0";
    a = "0";
}

function percent() {
    input.value = parseFloat(number) / 100;
    number = (parseFloat(number) / 100).toString();
}

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}


function updateTimeDisplay() {
    const timeDisplay = document.getElementById('timeDisplay');
    if (timeDisplay) {
        timeDisplay.textContent = getCurrentTime();
    }
}


updateTimeDisplay();

setInterval(updateTimeDisplay, 60000); 

document.addEventListener('keydown', function(event) {
    // Get the pressed key
    var key = event.key;

    // Check if the pressed key is a digit (0-9)
    if (/^\d$/.test(key)) {
        // Remove "selected" class from all elements with class "numbers"
        var numberElements = document.getElementsByClassName("number");
        for (var i = 0; i < numberElements.length; i++) {
            var element = numberElements[i];
            element.classList.remove("numberPressed");
        }

        // Add "selected" class to the element with the corresponding ID
        var numberElement = document.getElementById(key);
        addNumber(key);
        if (numberElement) {
            numberElement.classList.add("numberPressed");
            console.log(key + " pressed");
        }
    }
    else if (key === 'Backspace') {
        clearInput();
    }
    else if (['*', '/', '-', '+'].includes(key)) {
        addOperator(key);
    }
    else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    }
});

