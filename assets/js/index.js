/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Aug 22 2020 23:20:50 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

$(function () {
    $(document).scroll(function () {
      let $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() >= $nav.height());
    });
  });