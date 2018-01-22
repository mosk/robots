'use strict';

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

  // добавляем направления сортировки по дате
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

  // добавляем направления сортировки по готовности
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

  // скрол
  buttonUp.addEventListener("click", function(evt) {
    evt.preventDefault();
    scrollTo(document.getElementById('header').offsetTop);
  })
}