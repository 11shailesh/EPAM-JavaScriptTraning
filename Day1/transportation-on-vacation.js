//transportation-on-vacation
function rentalCarCost(d) {
var total = 0;
	if(d < 3 ){
		total = d * 40;
	}
	else if ( d >= 3 && d < 7){
		total = (d * 40 ) - 20;
	}
	else{
		total  = (d * 40) - 50;
	}
return total;
}

var dayValue = 5;
rentalCarCost(dayValue);