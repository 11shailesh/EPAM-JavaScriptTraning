//basic-mathematical-operations
function basicOp(operation, value1, value2) {
  var result = 0;
  switch (operation) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    case '*':
      result = value1 * value2;
      break;
  }
  return result;
}

//var op = '+'; var v1 = 4, var v2 = 4;
//basicOp(op,v1,v2);