jQuery(function($) {
  $(window).scroll(function(){
      if($(window).scrollTop() > 250) {
        $('.scroll-up').addClass("solid-scroll");

        if($(window).scrollTop() > 1310 && $(window).scrollTop() < 2940) {
          $('.scroll-up').addClass("solid-scroll2");
        } else {
          $('.scroll-up').removeClass("solid-scroll2");
        }

      } else {
        $('.scroll-up').removeClass("solid-scroll");
      }

    if($(window).scrollTop() > 5790) {
      $('.scroll-up').addClass("solid-scroll2");
    }

  });
});
