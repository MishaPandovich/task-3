(function() {	
	var deliveryToggleCourier = document.querySelector('.delivery__toggle--courier');
	var deliveryLabelCourier = document.querySelectorAll('.delivery__label--courier');
	var deliveryMap = document.querySelector('#map');
	var deliveryMapLabel = document.querySelector('.delivery__label--map');

	deliveryToggleCourier.addEventListener('click', function() {
		document.querySelector('.delivery__toggle.active').classList.remove('active');
		this.classList.add('active');

		deliveryMap.classList.add('delivery__map--courirer');
		deliveryMapLabel.classList.add('delivery__label--courier');

		for (var i=0; i<deliveryLabelCourier.length; i++) {
			deliveryLabelCourier[i].classList.remove('delivery__label--courier');
		}
	});

	var deliveryTogglePickup = document.querySelector('.delivery__toggle--pickup');

	deliveryTogglePickup.addEventListener('click', function() {
		document.querySelector('.delivery__toggle.active').classList.remove('active');
		this.classList.add('active');

		deliveryMap.classList.remove('delivery__map--courirer');
		deliveryMapLabel.classList.remove('delivery__label--courier');

		for (var i=0; i<deliveryLabelCourier.length; i++) {
			deliveryLabelCourier[i].classList.add('delivery__label--courier');
		}
	});
}());