
let total = 0;
let nums = []; //will reset upon page refresh, everytime when a num key pressed a new num is added
let operator = "";
let equation = [];
let equationString = "";

document.addEventListener('DOMContentLoaded', ()=>{
  calculate()
} )

function onClickButton(buttonValue){
  console.log('button value', buttonValue)
  
  if(buttonValue==='.'){
    console.log('not handled')
  }
  else if(['+', '-', 'x', '/'].includes(buttonValue)) {
    console.log('is operator')
    equation.push(buttonValue);
    setOperator(buttonValue)
  }
  else if(buttonValue==='='){
    console.log('equal')
    calculate();
    equation.push("=")
    equation.push(total);
  }
  else if(typeof(+buttonValue)==='number') {
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

function onClickEqualSign(){
  calculate();
  equation.push("=")
  equation.push(total);
  updateDisplay();
}
function setOperator(chosenOperator){
  operator = chosenOperator;
}
function calculate() {
  console.log('operator', operator)
  console.log('nums', nums);
  switch(operator) {
    case "+":
    total = nums[0]+nums[1];
      break;
    case "-":
      total = nums[0]-nums[1];
      break;
    case "x":
      total = nums[0]*nums[1];
      break;
    case "/":
      total = nums[0]/nums[1];
      break;
    default:
      total = "undefined";
      break;
  }
  
  console.log('total', total);
}
function updateInputNums(num){
  nums.push(+num);
  equation.push(+num);
  updateDisplay();
  console.log(nums)
}

function reset(){
  nums = [];
  operator = "";
  equation = [];
  total = 0; 
  updateDisplay();
  console.log(nums, total)
}
const add = function(a, b) {
  return a + b; 
	
};

const subtract = function(a, b) {
	return a - b; 
};

const sum = function() {
  let sum = 0; 
	for (let arg of arguments[0]) sum += arg;
  return sum;
};

const multiply = function() {
  let product = 1; 
	for (let arg of arguments[0]) product *= arg ;
  return product;
};


function verification(){
  console.log('verification');
  return true;
}
// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };
