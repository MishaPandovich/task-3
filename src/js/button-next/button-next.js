(function() {
	var buttonNext = document.querySelector('.button-next');
	buttonNext.addEventListener('click', function(event) {
		//при нажатии происходит анимация блока "Stages" (папка stages)
		window.animationStage(); 
	});
}());