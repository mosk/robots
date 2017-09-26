window.onload = function() {
  var order = document.querySelectorAll(".order");
  var orderText = document.querySelectorAll(".order__text");
  var orderDate = document.querySelectorAll(".order__text--date");
  var i;

  for (i = 0; i < orderText.length; i++) {

    /* скрываем пустые описания */
    if (orderText[i].innerHTML == "") {
      orderText[i].style.display = "none";
      var prevText = orderText[i].previousElementSibling;
      prevText.style.display = "none";
    }
  }

  for (i = 0; i < order.length; i++) {
    var text = order[i].querySelector(".order__text--date").innerHTML;
    text = text.replace(/(\d+).(\d+).(\d+)/, '$2/$1/$3')
    console.log(text);
    var date = new Date(text);
    /*console.log(date[i]);
    var order[i] = {
      date: date;
    }
    */
  }
}

/*
  var order = {
    date: ;
    condition: ;
  }
*/