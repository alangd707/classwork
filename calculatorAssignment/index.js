const display = document.getElementById('display');
let displayValue = 'first';
let firstValue = 0;
let secondValue = null;

function buttonClick(buttonType) {
    if(typeof(buttonType) === 'number') {
        firstValue = (firstValue * 10) + buttonType
    } else if (buttonType === 'delete') {
        if (displayValue === 'first') {
            firstValue = Math.floor(firstValue * .1);
        } else {
            secondValue = Math.floor(sceondvalue * .1)
        }
    } else if (buttonType === 'all-clear') {

    }
    updateDisplay()
}

function updateDisplay(condition) {
    display.innerHTML = firstValue
}