var number = function (number) {
  return function (operation) {
    return operation ? operation(number) : number;
  }
};
var zero = number(0);
var one = number(1);
var two = number(2);
var three = number(3);
var four = number(4);
var five = number(5);
var six = number(6);
var seven = number(7);
var eight = number(8);
var nine = number(9);

function plus(right) {
  return function (left) {
    return left + right;
  };
}

function minus(right) {
  return function (left) {
    return left - right;
  };
}

function times(right) {
  return function (left) {
    return left * right;
  };
}

function dividedBy(right) {
  return function (left) {
    return left / right;
  };
}