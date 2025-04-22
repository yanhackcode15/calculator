
let total = 0;
let nums = []; //will reset upon page refresh, everytime when a num key pressed a new num is added
let operator = "";
document.addEventListener('DOMContentLoaded', ()=>{
  calculate()
} )
function updateDisplay(){
  let display = document.querySelector(".display");
  display.textContent=`${total}`;
  console.log('updating display')
}
function onClickOperator(chosenOperator){
  setOperator(chosenOperator);
  updateDisplay();
}

function onClickEqualSign(){
  calculate();
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

  console.log('total', total);
}
function updateInputNums(num){
  nums.push(+num);
  console.log(nums)
}

function reset(){
  nums = [];
  operator = "";
  total = 0; 
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
