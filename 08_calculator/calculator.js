const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (items) {
  return items.reduce((total, item) => total + item, 0);
};

const multiply = function (list) {
  return list.reduce((total, item) => total * item, 1);
};

const power = function (a, b) {
  if (b === 0) return 1;
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function (a) {
  if (a === 0) return 1;
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
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
