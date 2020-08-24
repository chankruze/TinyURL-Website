/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Aug 22 2020 23:20:50 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

$(function () {
  $(document).scroll(function () {
    let $nav = $(".navbar");
    $nav.toggleClass('scrolled fixed-top', $(this).scrollTop() >= $nav.height());
  });
});

$('.command').click(function () {
  $(this).find('.more').toggleClass("fa-angle-right fa-angle-down");
  $(this).find(".command-wrapper").toggle();

  // close other commands' more
  $('.command').not(this).find('.more.fa-angle-down').toggleClass("fa-angle-down fa-angle-right");
  $('.command').not(this).find(".command-wrapper").hide();
});