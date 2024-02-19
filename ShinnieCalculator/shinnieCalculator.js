// Basic code for functionality
function  clearHistory() {
    document.getElementById('calcTypein').value = " ";
}
function valuesToDisplay(indValue) {
    document.getElementById('calcTypein').value += indValue;
}
function resultToDisplay() {
    const result = eval(document.getElementById('calcTypein').value);
    document.getElementById('calcTypein').value = result;
}

//Extras for User Friendly


