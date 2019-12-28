jQuery(function($) {
  $(window).scroll(function(){
    if($(window).scrollTop() > 250) {
      $('.scroll-up').addClass("solid-scroll");
    } else {
      $('.scroll-up').removeClass("solid-scroll");
    }
  });
});
