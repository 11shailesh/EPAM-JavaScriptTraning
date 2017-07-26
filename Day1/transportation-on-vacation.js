//transportation-on-vacation
function rentalCarCost(d) {
  var total = (40 * d),
    discount = 0;
  if (d < 3) {
    discount = total;
  } else if (d >= 3 && d < 7) {
    discount = total - 20;
  } else {
    discount = total - 50;
  }
  return discount;
}

//var dayValue = 5;
//rentalCarCost(dayValue);ayValue);