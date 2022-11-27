const display = document.getElementById('display');
let expression = []
let positive = true;
let decimal = false;


function changeValue(value) {
    if (Number(expression[expression.length - 1])) {
        expression[expression.length - 1] += value
    } else {
        expression.push(value)
    }
    updateInterface()
}

function addDecimalPoint() {
    if (Number(expression[expression.length - 1]) && !(expression[expression.length - 1].includes('.'))) {expression[expression.length - 1] += '.'}
    else {

    }
    updateInterface()
}

function addOperator(operator) {
    if (Number(expression[expression.length - 1])) {
        expression.push(operator);
        updateInterface();
    }
}

function squareRoot() {
    if (Number(expression[expression.length - 1])) {
        expression[expression.length - 1] = Math.sqrt(expression[expression.length - 1])
    }
    updateInterface();
}

function deleteInput(type) {
    if (type) {expression.pop()} else {expression = []}
    updateInterface();
}

function negative() {
    if (Number(expression[expression.length - 1])) {
        if (!expression[expression.length - 1].includes('-')) {
            expression[expression.length - 1] = '-' + expression[expression.length - 1]
        } else {
            expression[expression.length - 1].replace('-', '')
        }
    }
    updateInterface()
}

function equals() {
    if (Number(expression[expression.length - 1])) {
        expression.forEach((y) => {
            let initialIndex = expression.indexOf(y)
            if (y === '^') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) ** Number(expression[initialIndex + 1]))
                expression.splice(initialIndex + 1, 1)
                expression.splice(initialIndex - 1, 1)
            }
        })
        expression.forEach((y) => {
            let initialIndex = expression.indexOf(y)
            if (y === 'x') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) * Number(expression[initialIndex + 1]))
                expression.splice(initialIndex + 1, 1)
                expression.splice(initialIndex - 1, 1)
            } else if (y === '/') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) / Number(expression[initialIndex + 1]))
                expression.splice(initialIndex + 1, 1)
                expression.splice(initialIndex - 1, 1)
            }
        })
        expression.forEach((y) => {
            let initialIndex = expression.indexOf(y)
            if (y === '+') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) + Number(expression[initialIndex + 1]))
                expression.splice(initialIndex + 1, 1)
                expression.splice(initialIndex - 1, 1)
            } if (y === '-') {
                expression[initialIndex] = "" + (Number(expression[initialIndex - 1]) - Number(expression[initialIndex + 1]))
                expression.splice(initialIndex + 1, 1)
                expression.splice(initialIndex - 1, 1)
            }
        })
    }
    updateInterface()
}

function updateInterface() {
    console.log(expression)
    display.innerHTML = expression.join(' ')
}

