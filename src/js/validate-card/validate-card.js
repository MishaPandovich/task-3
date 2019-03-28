(function() {	
	var cardNumber = document.querySelector('.payment__input--number'),
			cardUserName = document.querySelector('.payment__input--user'),
			cardData = document.querySelector('.payment__input--data'),
			cardCvc = document.querySelector('.payment__input--cvc');


	function checkCardNumber(input) {
		// проверка поля ввода номера карты, алгоритм "Луна"
		var cardNumberValue = input.value,
				numbers = cardNumberValue.split(''),
				totalSum = 0,
				countNumber = 1;

		for (var i=0; i < numbers.length; i++) {
			numbers[i] = parseInt(numbers[i]);

			if (countNumber % 2 !== 0) {
				numbers[i] *= 2;

				if (numbers[i] >= 10) {
					numbers[i] -= 9;
				}
			}

			totalSum += numbers[i];
			countNumber++;
		}

		if (totalSum % 10 === 0) {
		 	return true;
		} else {
			return false;
		}
	}

	function checkCardUserName(input) {
		// перевод имени в большие буквы
		var valueCardUserName = input.value.toUpperCase();
		return input.value = valueCardUserName;
	}

	function checkCardData(input) {
		// добавление разделителя в поле с датой
		if (input.value.length === 2) {
			input.value += '/';
		}
	}

	function checkEmptyInput(numbers, date, user, cvc) {
		// проверка пустых полей
		var statusCard = document.querySelector('.payment__card-status');
		if (checkCardNumber(numbers) === true) {
			if ((numbers.value === '') || (date.value === '') || (user.value === '') || (cvc.value === '')) {
				statusCard.innerHTML = 'НЕ ОПРЕДЕЛЁН';
			} else {
				statusCard.innerHTML = 'ОДОБРЕНО';
			}
		}
	}

	cardNumber.addEventListener('change', function() {
		checkCardNumber(this);
		checkEmptyInput(cardNumber, cardData, cardUserName, cardCvc);
	});

	cardUserName.addEventListener('keyup', function() {
		checkCardUserName(this);
		checkEmptyInput(cardNumber, cardData, cardUserName, cardCvc);
	});

	cardData.addEventListener('input', function() {
		checkCardData(this);
		checkEmptyInput(cardNumber, cardData, cardUserName, cardCvc);
	});

	cardCvc.addEventListener('input', function() {
		checkEmptyInput(cardNumber, cardData, cardUserName, cardCvc);
	});
}());