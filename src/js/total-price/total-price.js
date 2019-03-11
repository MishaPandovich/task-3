(function() {
	var price = document.querySelectorAll('.order__price-value'),
			totalPrice = document.querySelector('.total__value'),
			orderCount = document.querySelectorAll('.order__count-value');

	window.totalSum = function() {
	  //показывает итоговую сумму
	  var finelSum = 0;

	  for (var i=0; i < orderCount.length; i++) {
	    var sumOrder = orderCount[i].innerHTML * price[i].innerHTML;
	    finelSum += sumOrder;
	  }

	  totalPrice.innerHTML = finelSum;
	}

	totalSum();
}());