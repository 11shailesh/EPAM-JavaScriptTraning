function myexpression(number, operation) {
  if (operation === undefined) {
    return number;
  }
  return operation(number);
}

function zero(operation) {

  return myexpression(0, operation);

}

function one(operation) {

  return myexpression(1, operation);

}

function two(operation) {

  return myexpression(2, operation);
}

function three(operation) {

  return myexpression(3, operation);

}

function four(operation) {

  return myexpression(4, operation);

}

function five(operation) {

  return myexpression(5, operation);

}

function six(operation) {

  return myexpression(6, operation);

}

function seven(operation) {

  return myexpression(7, operation);

}

function eight(operation) {

  return myexpression(8, operation);

}

function nine(operation) {

  return myexpression(9, operation);

}

function plus(right) {

  return function(left) {

    return left + right;
  }
}

function minus(right) {

  return function(left) {

    return left - right;
  }
}

function times(right) {

  return function(left) {

    return left * right;
  }
}

function dividedBy(right) {

  return function(left) {

    return left / right;
  }
}
