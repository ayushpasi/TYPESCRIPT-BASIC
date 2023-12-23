"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector("button");
const numResult = [];
const textResult = [];
buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    printResult({ val: result, timeStamp: new Date() });
    numResult.push(result);
    textResult.push(stringResult);
    console.log(numResult, textResult);
});
function printResult(resObj) {
    console.log(resObj.val);
    console.log(resObj.timeStamp);
}
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    return +a + +b;
}
