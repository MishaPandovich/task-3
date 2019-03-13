ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [44.763211, 39.875628],
      zoom: 14
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemarkOne = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Режим работы: ПН-ПТ с 9:00 до 18:00,<br> СБ-ВС с 10:00 до 20:00 <br> Обед с 12:00 до 13:00'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'images/ball.png',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    }),
    
    myPlacemarkTwo = new ymaps.Placemark([44.770181, 39.876085], {
      hintContent: 'Режим работы: ПН-ПТ с 8:00 до 17:00,<br> СБ-ВС с 9:00 до 20:00 <br> Обед с 13:00 до 14:00'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'images/ball.png',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-24, -24],
      // Смещение слоя с содержимым относительно слоя с картинкой.
      iconContentOffset: [15, 15],
      // Макет содержимого.
      iconContentLayout: MyIconContentLayout
    }),

    myPlacemarkThree = new ymaps.Placemark([44.758013, 39.871594], {
        hintContent: 'Режим работы: ПН-ПТ с 9:00 до 18:00,<br> СБ-ВС с 10:00 до 19:00 <br> Без обеда'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/ball.png',
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

  myMap.geoObjects
    .add(myPlacemarkOne)
    .add(myPlacemarkTwo)
    .add(myPlacemarkThree);
    
  // Через коллекции можно подписываться на события дочерних элементов.
  var adress = document.querySelector('.deliver__adress');
  
  myPlacemarkOne.events.add('click', function () { 
    adress.innerHTML = 'улица Дорожная, дом 15, корп 2';
  });
  
  myPlacemarkTwo.events.add('click', function () {
    adress.innerHTML = 'улица Луценко, дом 3';
  });

  myPlacemarkThree.events.add('click', function () {
    adress.innerHTML = 'улица Гоголя, дом 13';
  });
});