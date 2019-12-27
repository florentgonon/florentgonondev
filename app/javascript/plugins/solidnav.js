jQuery(function($) {
  $(window).scroll(function(){
      if($(window).scrollTop() > 50) {
            $('.navbar').addClass("solid-nav");
      } else {
            $('.navbar').removeClass("solid-nav");
      }
  });
});
