
let total = 0;
let nums = []; //will reset upon page refresh, everytime when a num key pressed a new num is added
let operator = "";
let equation = [];
let equationString = "";
let num1 = "";
let num2 = "";

document.addEventListener('DOMContentLoaded', ()=>{
  calculate()
} )

function onClickButton(buttonValue){
  console.log('button value', buttonValue)
  
  if(buttonValue==='.' && decimalIsAllowed()){
    console.log('decimal button pressed')
    nums.push(buttonValue);
    equation.push(buttonValue);
  }
  else if(['+', '-', 'x', '/'].includes(buttonValue) && operatorIsAllowed()) {
    console.log('is operator')
    equation.push(buttonValue);
    num1 = nums.join('');
    nums = [];
    setOperator(buttonValue)
  }
  else if(buttonValue==='='){
    console.log('equal')
    num2 = nums.join('');
    calculate();
    equation.push("=")
    equation.push(total);
  }
  else if(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonValue)) {
    nums.push(+buttonValue);
    equation.push(+buttonValue);
  }
  
  else {
    console.log("shouldn't happen")
  }
  updateDisplay();
}

function updateDisplay(){
  let display = document.querySelector(".display");
  equationString = equation.join(' ');
  display.textContent= equationString;
  console.log('updating display', equationString)
}


function setOperator(chosenOperator){
  operator = chosenOperator;
}
function calculate() {
  console.log('operator', operator)
  console.log('nums', nums);
  switch(operator) {
    case "+":
    total = safeAdd(+num1, +num2);
      break;
    case "-":
      total = safeSubtract(+num1, +num2);
      break;
    case "x":
      total = safeMultiply(+num1, +num2);
      break;
    case "/":
      total = safeDivide(+num1, +num2);
      break;
    default:
      total = "undefined";
      break;
  }
  
  console.log('total', total);
}


function reset(){
  nums = [];
  operator = "";
  equation = [];
  total = 0; 
  updateDisplay();
  console.log(nums, total)
}


function safeAdd(a, b) {
  let result = a + b;
  // If either number has decimals, round to 10 decimal places to avoid weirdness
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    result = Math.round(result * 1e10) / 1e10;
  }
  return result;
}

function safeSubtract(a, b){
  let result = a - b;
  // If either number has decimals, round to 10 decimal places to avoid weirdness
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    result = Math.round(result * 1e10) / 1e10;
  }
  return result;
}

function safeMultiply(a, b){
  let result = a * b;
  // If either number has decimals, round to 10 decimal places to avoid weirdness
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    result = Math.round(result * 1e10) / 1e10;
  }
  return result;
}
function safeDivide(a, b){
  let result = a/b;
  // If either number has decimals, round to 10 decimal places to avoid weirdness
  if (!Number.isInteger(result)) {
    result = Math.round(result * 10) / 10;
  }
  return result;
}


function decimalIsAllowed(){ //only allowed if the nums array has no existing decimal
  console.log('verifying decimal');
  if(!nums.includes('.')) return true;
  alert('Decimal misuse! Try again!');
  return false;
}

function operatorIsAllowed(){
  console.log('verification');
  //an operator must be only allowed following a number, and only one operator allowed 
  if(operator==='' &&nums.length>0) return true; //if it's the only operator and after a number is entered, do allow. otherwise, don't allow it.
  alert("Input not allowed, try again!")
  return false;
}

//handling numbers: instead of pushing upon number button click, pushing into array then only retrive the number 1 right before operator was pressed, retrive number 2 when equal sign is pressed.

// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };
