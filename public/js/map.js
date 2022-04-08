// ---===ЯНДЕКС ПОГОДА===---

// [59.943683, 30.360164]

/* fetch('https://justcors.com/tl_3041e83/https://api.weather.yandex.ru/v2/informers?lat=59.943683&lon=30.360164', {
  headers: { 'X-Yandex-API-Key': '752cddb7-4e14-4911-b498-5862fdbcab0d' },
})
  .then((data) => data.json())
  .then((data) => console.log(data)); */

// Функция window.ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
// center: [59.943683, 30.360164],

// ---===ЯНДЕКС КАРТА===---
window.ymaps.ready(() => {
  const myMap = new window.ymaps.Map('map', {
    center: [59.943683, 30.360164], // стартовая точка
    zoom: 17, // стартовое приближение
  }, {
    searchControlProvider: 'yandex#search',
  });

  // Создаём макет содержимого.
  const MyIconContentLayout = window.ymaps.templateLayoutFactory.createClass(
    '<div style="color: #ffffff; font-weight: bold;">$[properties.iconContent]</div>',
  );
    // ЭТО ПЕРЕМЕННАЯ ДЛЯ ПЕРОВГО ЗНАЧКА , АДРЕС ПО КООРДИНАТАМ
  const myPlacemark1WithContent = new window.ymaps.Placemark([59.943683, 30.360164], {
    hintContent: 'Вы кто такие? Я вас не звал',
    balloonContent: 'А эта — новогодняя',
    iconContent: '',
  }, {
  // Опции.
  // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки. СЕЙЧАС ЛЕЖИТ СОКС ПНГ , ФОН ПРОЗРАЧНЫЙ , НО НА КАРТЕ ЭТОГО НЕ ВИДНО.
    iconImageHref: '../img/sox.png',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [150, 15],
  // Макет содержимого.
  // iconContentLayout: MyIconContentLayout,
  });

  // ЭТО ПЕРЕМЕННАЯ ДЛЯ ВТОРОГО ЗНАЧКА , АДРЕС ПО КООРДИНАТАМ
  const myPlacemark2WithContent = new window.ymaps.Placemark([59.943863, 30.328292], {
    hintContent: 'Вы кто такие? Я вас не звал',
    balloonContent: 'А эта — новогодняя',
    iconContent: '',
  }, {
  // Опции.
  // Необходимо указать данный тип макета.
    iconLayout: 'default#imageWithContent',
    // Своё изображение иконки метки.
    iconImageHref: '../img/sox.png',
    // Размеры метки.
    iconImageSize: [48, 48],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-24, -24],
    // Смещение слоя с содержимым относительно слоя с картинкой.
    iconContentOffset: [15, 15],
    // Макет содержимого.
    iconContentLayout: MyIconContentLayout,
  });
  // ЗДЕСЬ ВЫЗЫВАЕТСЯ ПЕРЕМЕННЫЕ ДЛЯ ОБЪЯВЛЕНИЯ НА КАРТЕ.
  myMap.geoObjects
    .add(myPlacemark1WithContent)
    .add(myPlacemark2WithContent);
});
