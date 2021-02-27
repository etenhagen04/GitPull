// Named Function

function namedAddition(x, y) {
    return x + y
}

function namedSubtraction(x, y) {
    return x - y
}

function namedMultiplication(x, y) {
    return x * y
}

function namedDivision(x, y) {
    return x / y
}

namedAddition(4, 2)
namedSubtraction(4, 2)
namedMultiplication(4, 2)
namedDivision(4, 2)

// Anonymous Function

let anonAddition = function() {
    const num1 = 4
    const num2 = 2
    return num1 + num2
}

let anonSubtraction = function() {
    const num1 = 4
    const num2 = 2
    return num1 - num2
}

function anonMultiplication() {
    const num1 = 4
    const num2 = 2
    return num1 * num2
}

function anonDivision() {
    const num1 = 4
    const num2 = 2
    return num1 / num2
}

anonAddition()
anonSubtraction()
anonMultiplication()
anonDivision()

// Method

const numbers = {
    num1: 4,
    num2: 2
}

let methodSum = numbers.num1 + numbers.num2

let methodDiff = numbers.num1 - numbers.num2

let methodProd = numbers.num1 * numbers.num2

let methodQuot = numbers.num1 / numbers.num2