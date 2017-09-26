window.onload = function() {
  var order = document.querySelectorAll(".order");
  var orderText = document.querySelectorAll(".order__text");
  var orderDate = document.querySelectorAll(".order__text--date");
  var i;

  for ( i = 0; i < orderText.length; i++ ) {

    /* скрываем пустые описания */
    if (orderText[i].innerHTML == "") {
      orderText[i].style.display="none";
      var prevText = orderText[i].previousElementSibling;
      prevText.style.display="none";
    }
  }

  for ( i = 0; i < order.length; i++ ) {
    var text = order[i].querySelector(".order__text--date").innerHTML;
    text = "(" + text.replace( /\./g, ")(" ) + ")";
    console.log(text);
    console.log(text.replace);
    var date = new Date( text.replace( $3, $2, $1) );
    console.log(date);
  }
}

/*
  var order = {
    date: ;
    condition: ;
  }
*/