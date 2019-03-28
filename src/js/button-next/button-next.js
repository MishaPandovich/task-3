(function() {
	var buttonNext = document.querySelector('.button-next'),
			countPress = 0;

	buttonNext.addEventListener('click', function(event) {
		//при нажатии происходит анимация блока "Stages" (папка stages)
		window.animationStage(); 
		countPress++;
		nextStages(countPress);
	});

	function nextStages(countPress) {
		var stageOne = document.querySelector('.cart'),
				stageTwo = document.querySelector('.delivery'),
				stageThree = document.querySelector('.payment'),
				total = document.querySelector('.total');

		if (countPress == 1) {
			// происходит переход на следующую стадию
			stageOne.classList.add('hidden');
			total.classList.add('hidden');
			stageTwo.classList.add('show');
			buttonNext.innerHTML = 'Далее';
		}

		if (countPress == 2) {
			stageTwo.classList.remove('show');
			stageThree.classList.remove('hidden');
			total.classList.remove('hidden');
			buttonNext.innerHTML = 'Перейти к оплате';
		}
	}
}());
