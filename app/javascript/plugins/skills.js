// this has nothing to do with the animation, just forces the window to be a size that allows a scroll
var containerHeight = $(window).height() / 2;

$('.spacer').css("height", containerHeight);

// Find the height of the previous section, half it so when you have scrolled more than half past the section, it triggers the animation
var x = $('.skills').prev().height() + 1200;

$(window).scroll(function() {
  // checks to see if you have scrolled far enough down to activate the animation
  if ($(window).scrollTop() >= x) {
    //find each element with the class .skill-percent
    $('.skill-percent').each(function() {
      // animate
      $(this).animate({
        //finds the width from the data-percent attribute
        width: $(this).data('percent') + '%'
      }, 1000);
    });
  }
});
