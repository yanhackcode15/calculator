//add, subtract, get the sum, multiply, get the power, and find the factorial

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

const power = function(base, power) {
	return Math.pow(base, power);
};

const factorial = function(n) {
  if (n===0){
    return 1; 
  }
  else if (n===1) {
    return 1;
  }
  return n * factorial(n-1);
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
