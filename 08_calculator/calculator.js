const add = function(a,b) {
	return a +b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((s, item) => s += item, 0);
};

const multiply = function(arr) {
  return arr.reduce((mult, item)=> mult*=item, 1);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(a) {
  let fac = 1;
  for(i=1; i <= a; i++){
    fac *= i;
  }
  return fac;
	
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
