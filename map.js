// [59.943683, 30.360164]

fetch('https://justcors.com/tl_3041e83/https://api.weather.yandex.ru/v2/informers?lat=59.943683&lon=30.360164', {
  headers: { 'X-Yandex-API-Key': '752cddb7-4e14-4911-b498-5862fdbcab0d' },
})
  .then((data) => data.json())
  .then((data) => console.log(data));
