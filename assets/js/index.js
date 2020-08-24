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

$('.more').click(function () {
  $(this).toggleClass("fa-angle-down fa-angle-up");
  $(this).parent().parent().siblings(".command-wrapper").toggle();

  // close other commands' more
  $('.more.fa-angle-up').not(this).toggleClass("fa-angle-up fa-angle-down");
  $('.more').not(this).parent().parent().siblings(".command-wrapper").hide();
});