
let total = 0;
let nums = []; //will reset upon page refresh, everytime when a num key pressed a new num is added
let operator = "";
let equation = [];
let equationString = "";
document.addEventListener('DOMContentLoaded', ()=>{
  calculate()
} )
function updateDisplay(){
  let display = document.querySelector(".display");
  equationString = equation.join(' ');
  display.textContent= equationString;
  console.log('updating display', equationString)
}
function onClickOperator(chosenOperator){
  setOperator(chosenOperator);
  switch(operator) {
    case "add":
      equation.push('+');
      break;
    case "subtract":
      equation.push('-');
      break;
    case "multiply":
      equation.push('x');
      break;
    case "divide":
      equation.push('/');
      break;
    default:
      total = "undefined";
      break;
  }
  ;
  updateDisplay();
}

function onClickEqualSign(){
  calculate();
  equation.push("=")
  updateDisplay();
}
function setOperator(chosenOperator){
  operator = chosenOperator;
}
function calculate() {
  console.log('operator', operator)
  console.log('nums', nums);
  switch(operator) {
    case "add":
    total = nums[0]+nums[1];
      break;
    case "subtract":
      total = nums[0]-nums[1];
      break;
    case "multiply":
      total = nums[0]*nums[1];
      break;
    case "divide":
      total = nums[0]/nums[1];
      break;
    default:
      total = "undefined";
      break;
  }
  equation.push(total)
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


// function numberFunction(value) {
//   console.log("value", value);
//   //first check whether the click is legit. i.e. if can't click on x twice in a roll, must start with a number ...etc
//   if(verification()){
//   //once it's legit, then push into an array

//   }else {
//     alert('try again!');
//   }
// }

// function displayEquation(equation){
//   console.log('equation', equation);
// }

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
