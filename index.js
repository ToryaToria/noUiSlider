//  global noUiSlider:readonly 

// sliderElement - элемент к которому побключится библиотека со слайдером
const sliderElement = document.querySelector('.level-form__slider');

// поле для ввода цены
const valueElement = document.querySelector('.level-form__value');

// элемент "Я оптовик"
const specialElement = document.querySelector('.level-form__special');


noUiSlider.create(sliderElement, {
  range: {
    // диапазон
    min: 0,
    max: 100,
  },
  // значение, на котором стоит бегунок
  start: 80,
// с какой стороны закрашивается слайдер, lower - до ползунка, upper - после 
  connect: 'lower',

  // форматирование значений ручки
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      //parseFloat - превращает строку в число (с плавающ. запятой)
      return parseFloat(value);
    },
  },

});

valueElement.value = 60;


// sliderElement.noUiSlider.on('update', (...rest) => {
//   console.log(rest);
// });

// вешаем событие update - изменение значения на ручку слайдера
sliderElement.noUiSlider.on('update', () => {

  // значение ручки присваеваем полю
  valueElement.value = sliderElement.noUiSlider.get();
});

// на "Я оптовик" вешается событие change - выбрано-невыбрано
specialElement.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    // Цена и шаг в десять раз меньше

    // задаем слайдеру новые параметры
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 10,
      },
      step: 0.1,
      start: 8,

    });
    // sliderElement.noUiSlider.set(8);

  } else {
    // Цена и шаг по умолчанию
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 80,
    });

    // sliderElement.noUiSlider.set(80);
  }
});