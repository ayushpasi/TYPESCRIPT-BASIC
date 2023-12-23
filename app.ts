const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector("button")!;
const numResult: number[] = [];
const textResult: string[] = [];
buttonElement.addEventListener("click", () => {
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);
  const stringResult = add(num1, num2);
  printResult({ val: result as number, timeStamp: new Date() });
  numResult.push(result as number);
  textResult.push(stringResult as string);
  console.log(numResult, textResult);
});
function printResult(resObj: { val: number; timeStamp: Date }) {
  console.log(resObj.val);
  console.log(resObj.timeStamp);
}
function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
  return +a + +b;
}
