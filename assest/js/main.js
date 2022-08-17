jQuery(function ($) {
  'use strict';

  // team-item owl-carousel js end///
  $('.nice-select, .select-coin').niceSelect();
  //::::: preloder js::::::
  $(window).on("load", function () {
    $('.preloders').fadeOut();
  });
  // range-slider js end //
  // counter js start////
    $('.counter').counterUp({
      time: 1000
  });
  // counter js end /////
      // scrollbar
      $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
          $('.menu-section').addClass('sticky-menu');
        } else {
          $('.menu-section').removeClass('sticky-menu');
        }
      })
  
      // scroll top to bottom
      $(window).scroll(function () {
        if ($(this).scrollTop() > 160) {
          $('.scroll-up').fadeIn();
        } else {
          $('.scroll-up').fadeOut();
        }
      })
      $(".scroll-up").click(function () {
        $("html ,body").animate({
          scrollTop: 0
        });
      });
      // :::::: wow js :::::::
      new WOW().init();


}(jQuery));