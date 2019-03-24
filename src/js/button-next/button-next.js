(function() {
	var buttonNext = document.querySelector('.button-next');

	buttonNext.addEventListener('click', function(event) {
		//при нажатии происходит анимация блока "Stages" (папка stages)
		window.animationStage(); 
		nextStages();
	});

	function nextStages() {
		var stageOne = document.querySelector('.cart'),
				stageTwo = document.querySelector('.delivery'),
				total = document.querySelector('.total');
		// происходит переход на следующую стадию
		stageOne.classList.add('hidden');
		total.classList.add('hidden');
		stageTwo.classList.add('show');
	}
}());
