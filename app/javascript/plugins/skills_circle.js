function skills_circle() {

  $(window).scroll(function() {
    if($(window).scrollTop() > 2300) {
      $(".progress-circle").each(function() {
       if ($(this).isInViewport()) {
         $(this).addClass('animate')
       }
      });
    }
  });


  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
}

export { skills_circle };
