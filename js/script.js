window.onload = function() {
  var orderHTML = document.querySelectorAll(".order");
  var orderText = document.querySelectorAll(".order__text");
  var orderDate = document.querySelectorAll(".order__text--date");

  var buttonSortDate = document.querySelector(".sort__date");
  var buttonSortCondition = document.querySelector(".sort__condition");

  var buttonUp = document.querySelector(".button--up");

  var orders = [];
  var i;
  var date;

  /* добавляем направления сортировки */
  buttonSortDate.addEventListener("click", function() {
    if (buttonSortDate.classList.contains("sort__text--up")) {
      buttonSortDate.classList.remove("sort__text--up");
      buttonSortDate.classList.add("sort__text--down");
    } else if (buttonSortDate.classList.contains("sort__text--down")) {
      buttonSortDate.classList.remove("sort__text--down");
      buttonSortDate.classList.add("sort__text--up");
    } else {
      buttonSortCondition.classList.remove("sort__text--up");
      buttonSortCondition.classList.remove("sort__text--down");
      buttonSortDate.classList.add("sort__text--up");
    }
  })

  buttonSortCondition.addEventListener("click", function() {
    if (buttonSortCondition.classList.contains("sort__text--up")) {
      buttonSortCondition.classList.remove("sort__text--up");
      buttonSortCondition.classList.add("sort__text--down");
    } else if (buttonSortCondition.classList.contains("sort__text--down")) {
      buttonSortCondition.classList.remove("sort__text--down");
      buttonSortCondition.classList.add("sort__text--up");
    } else {
      buttonSortDate.classList.remove("sort__text--up");
      buttonSortDate.classList.remove("sort__text--down");
      buttonSortCondition.classList.add("sort__text--up");
    }
  })

  /* плавный скрол */
  buttonUp.addEventListener("click", function(evt) {
    evt.preventDefault();
    smoothScrollTo(document.getElementById('header').offsetTop);
  })

  window.smoothScrollTo = (function() {
    var timer;
    var start;
    var factor;

    return function(target, duration) {
      var offset = window.pageYOffset;
      var delta = target - window.pageYOffset; // Y-offset difference
      duration = duration || 1000; // default 1 sec animation
      start = Date.now(); // get start time
      factor = 0;

      if (timer) {
        clearInterval(timer); // stop any running animations
      }

      function step() {
        var y;
        factor = (Date.now() - start) / duration; // get interpolation factor
        if (factor >= 1) {
          clearInterval(timer); // stop animation
          factor = 1; // clip to max 1.0
        }
        y = factor * delta + offset;
        window.scrollBy(0, y - window.pageYOffset);
      }

      timer = setInterval(step, 10);
      return timer;
    };
  }());

// Сортировка
  for (i = 0; i < orderText.length; i++) {

    /* скрываем пустые описания свойств заказа */
    if (orderText[i].innerHTML == "") {
      orderText[i].style.display = "none";

      /* скрываем свойства*/
      var prevText = orderText[i].previousElementSibling;
      prevText.style.display = "none";
    }
  }

  for (i = 0; i < orderHTML.length; i++) {

    /* находим даты заказов */
    var text = orderHTML[i].querySelector(".order__text--date").innerHTML;

    /* меняем дни с месяцами местами */
    text = text.replace(/(\d+).(\d+).(\d+)/, '$2/$1/$3');

    /* создаём дату в мс */
    date = +(new Date(text));

    /* собираем всю информацию по заказу */
    var order = {};
    order.name = orderHTML[i].querySelector(".order__title").innerHTML;
    order.date = date;
    order.number = i;
    order.condition = +orderHTML[i].querySelector(".order__condition .progress").innerHTML.replace("%", "");

    /* добавляем в список заказов */
    orders.push(order);
  }

  /* сортируем, начинаем со старых */
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

  /* сортируем, начинаем с новых */
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

  /* сортируем, начинаем с наименее готовых */
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

  /* сортируем, начинаем с наиболее готовых */
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
}