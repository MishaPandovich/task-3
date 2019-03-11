(function() {
  // находим все элементы с которыми будем взаимодействовать
  var sliderElement = document.querySelectorAll('.slider'),
      thumbSlider = document.querySelectorAll('.thumb'),
      rangeLine = document.querySelectorAll('.range-line'), 
      orderCount = document.querySelectorAll('.order__count-value');

  function slider(thumbElem, sliderElem, line, count) {
    var MIN_POSITION_LEFT = 10, // мин. значение слайдера
        MAX_POSITION_RIGHT = sliderElem.offsetWidth - thumbElem.offsetWidth, // макс. значение слайдера
        WIDTH_SLIDER = sliderElem.offsetWidth; // ширина слайдера

    thumbElem.onmousedown = function(e) {
      var thumbCoords = getCoords(thumbElem), // получение координат бегунка
          sliderCoords = getCoords(sliderElem), // и слайдера
          shiftX = e.pageX - thumbCoords.left; // раст. от лев стр. докум. до курсора - раст. от лев. стр. док. до .бегунка

      document.onmousemove = function(e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left;

        // Если курсор ушёл вне слайдера
        if (newLeft < MIN_POSITION_LEFT) {
          newLeft = MIN_POSITION_LEFT;
        } 

        if (newLeft > MAX_POSITION_RIGHT) {
          newLeft = MAX_POSITION_RIGHT;
        }

        thumbElem.style.left = newLeft + 'px';
        rangeLine(thumbElem, line); // изменение линиии при перетаскивании бегунка
        showMinPrice(thumbElem, count); // изменение количества заказнных товаров при перетаскивании бегунка
        window.totalSum(); //показывает итоговую сумму при изменении количества товара
      }

      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };

      return false; // disable selection start (cursor change)
    };

    function getCoords(elem) { // кроме IE8-
    // получение координат элемента
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
    }

    function rangeLine(thumbElem, line) {
    // изменение диапозона линии при перетаскивании бегунка
      var left = parseInt(thumbElem.style.left);
      line.style.right = ((WIDTH_SLIDER - MIN_POSITION_LEFT) - left) + 'px';
    }

    function showMinPrice(thumbElem, count) {
      // изменение количества заказнных товаров при перетаскивании бегунка
      int = parseInt(thumbElem.style.left);
      percent = Math.round((int * 100)/ (WIDTH_SLIDER - MIN_POSITION_LEFT));
      value = Math.round((percent * 31)/100);

      count.innerHTML = value;
    }
  }

  for (var i=0; i<sliderElement.length; i++) {
    slider(thumbSlider[i], sliderElement[i], rangeLine[i], orderCount[i]);
  }
}());