'use strict'

$(function () {
  var $header = $("#header");
  var scrollSize = 50; //超えると表示
  $(window).on("load scroll", function () {
    var value = $(this).scrollTop();
    if (value > scrollSize) {
      $header.addClass("scroll");
    } else {
      $header.removeClass("scroll");
    }
  });
});