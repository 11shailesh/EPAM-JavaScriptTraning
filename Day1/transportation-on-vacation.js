function rentalCarCost(d) {
  var cost = (40 * d),
    total = 0;
  if (d < 3) {
    total = cost;
  } else if (d >= 3 && d < 7) {
    total = cost - 20;
  } else {
    total = cost - 50;
  }
  return total;
}
