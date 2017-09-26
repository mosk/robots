window.onload = function() {
  var order = document.querySelectorAll(".order");
  var orderText = document.querySelectorAll(".order__text");
  var orderDate = document.querySelectorAll(".order__text--date");
  var i;

  for (i = 0; i < orderText.length; i++) {

    /* скрываем пустые описания свойств заказа */
    if (orderText[i].innerHTML == "") {
      orderText[i].style.display = "none";
      
      /* скрываем свойства*/
      var prevText = orderText[i].previousElementSibling;
      prevText.style.display = "none";
    }
  }

  for (i = 0; i < order.length; i++) {

    /* находим даты заказов */
    var text = order[i].querySelector(".order__text--date").innerHTML;

    /* меняем дни с месяцами местами */
    text = text.replace(/(\d+).(\d+).(\d+)/, '$2/$1/$3');
    console.log(text);

    /* создаём дату в мс */
    var date = +(new Date(text));
    console.log(date);
    var dates = [];
    dates.push(date + i);
    console.log(dates);
  }
}

/*
  var order = {
    date: ;
    condition: ;
  }
*/