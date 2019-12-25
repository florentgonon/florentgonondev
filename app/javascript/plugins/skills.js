function skills() {

  ;( function( $ ) {
    $(window).scroll(function() {
      if($(window).scrollTop() > 900) {
        "use strict";
        var $bars = $( ".bar" ),
          methods = {
            init: function() {

              // Bind events
              methods.bindEvents();

            },

            bindEvents: function() {
              // Loop through each of the bars...
                $bars.each( function() {

                  var $bar = $( this ),
                    $pct = $bar.find( ".pct" ),
                    data = $bar.data( "bar" );

                  setTimeout( function() {

                    $bar
                      .css( "background-color", data.color )
                      .animate({
                        "width": $pct.html()
                      }, data.speed || 3000, function() {

                        $pct.css({
                          "color": data.color,
                          "opacity": 1
                        });

                      });

                  }, data.delay || 0 );

                });
            }
          };
      }

        methods.init();
    });

    // Initialize on page load

  })( jQuery );
}

export { skills };