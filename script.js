let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let res = 0;

function add() {
    res = Number(num1.value) + Number(num2.value);
    document.getElementById("sum-el").textContent = "Result: " + res;
}

function subtract() {
    res = Number(num1.value) - Number(num2.value);
    document.getElementById("sum-el").textContent = "Result: " + res;
}

function multiply() {
    res = Number(num1.value) * Number(num2.value);
    document.getElementById("sum-el").textContent = "Result: " + res;
}

function divide() {
    res = Number(num1.value) / Number(num2.value);
    document.getElementById("sum-el").textContent = "Result: " + res;
}
