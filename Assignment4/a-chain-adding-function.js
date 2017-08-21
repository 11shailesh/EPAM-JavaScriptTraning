function add(val) {
  function closure(num) {
    val = val + num;
    return add(val);
  }
  closure.valueOf = function() {
    return val;
  };
  return closure;
}