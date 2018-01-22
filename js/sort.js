'use strict';

// сортировка
for (i = 0; i < orderText.length; i++) {

  // скрываем пустые описания свойств заказа
  if (orderText[i].innerHTML == "") {
    orderText[i].style.display = "none";

    // скрываем свойства
    var prevText = orderText[i].previousElementSibling;
    prevText.style.display = "none";
  }
}

for (i = 0; i < orderHTML.length; i++) {

  // находим даты заказов
  var text = orderHTML[i].querySelector(".order__text--date").innerHTML;

  // меняем дни с месяцами местами
  text = text.replace(/(\d+).(\d+).(\d+)/, '$2/$1/$3');

  // создаём дату в мс
  date = +(new Date(text));

  // собираем всю информацию по заказу
  var order = {};
  order.name = orderHTML[i].querySelector(".order__title").innerHTML;
  order.date = date;
  order.number = i;
  order.condition = +orderHTML[i].querySelector(".order__condition .progress").innerHTML.replace("%", "");

  // добавляем в список заказов
  orders.push(order);
}

// сортируем, начинаем со старых
function sortDateOlder() {
  orders.sort(function(a, b) {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  })
}

// сортируем, начинаем с новых
function sortDateNewer() {
  orders.sort(function(a, b) {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  })
}

// сортируем, начинаем с наименее готовых
function sortConditionLess() {
  orders.sort(function(a, b) {
    if (a.condition > b.condition) {
      return 1;
    }
    if (a.condition < b.condition) {
      return -1;
    }
    return 0;
  })
}

// сортируем, начинаем с наиболее готовых
function sortConditionBetter() {
  orders.sort(function(a, b) {
    if (a.condition > b.condition) {
      return 1;
    }
    if (a.condition < b.condition) {
      return -1;
    }
    return 0;
  })
}