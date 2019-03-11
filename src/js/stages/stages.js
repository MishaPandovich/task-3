(function() {
	function animation(elementid, finalvalue, speedAnimation, number) {
		// функция анимации
		function animationStage() {
			var n = parseInt(elementid.style.right);
					n -= 1;

			elementid.style.right = n + 'px';
		}

		// запуск анимации
		var startAnimationStage = setInterval(function() { animationStage() }, speedAnimation);

		// проверяем загрузку, и если значение загрузки равно = 0, то прекращаем анимацию
		var stopAnimationStage = setInterval(function() { 
			var value = parseInt(elementid.style.right);

			if (value == finalvalue) {
				clearInterval(startAnimationStage); 
				clearInterval(stopAnimationStage);
				numbers[number].classList.add('active'); 
				subtitle[number].classList.add('active');
			}
		});
	}

	var stages = document.querySelectorAll('.stage > .stage__line > .stage__fill'),		
			numbers = document.querySelectorAll('.stage > .stage__number'),
			subtitle = document.querySelectorAll('.stage > .subtitle');
	
	window.animationStage = function() {
		/*функция отвечающая за анимацию*/
		if (parseInt(stages[0].style.right) ==  370) {
			animation(stages[0], 0, 2, 1); 
			//стадия, число на котором заканчивается анимация, скорость анимации, следующая стадия
		}

		if (parseInt(stages[0].style.right) == 0) { 
			animation(stages[1], 0, 2, 2);
		} 
	};
}());
