function skills_bar() {

    var skills = {
    rb: 100,
    js: 70,
    sq: 90,
    ht: 100,
    cs: 100,
    wp: 55
  };

  $(window).scroll(function() {
    if($(window).scrollTop() > 1700) {
      $.each(skills, function(key, value) {
        var skillbar = $("." + key);

        skillbar.animate(
          {
            width: value + "%"
          },
          3000,
          function() {
            $(".speech-bubble").fadeIn();
          }
        );
      });
    }
  });
}

export { skills_bar };
