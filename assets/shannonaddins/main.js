(function($) {
    "use strict";

    $(document).ready(function() {


		
	// Particleground js
   
         $('#particles').particleground({
            dotColor: '#555',
            lineColor: '#555'
         });
        $('.intro').css({
           'margin-top': -($('.intro').height() / 2)
         });
		 
		  $('.intro').css({
           'margin-bottom': -($('.intro').height() / 2)
         });
		  // Slider screen Height fix

        setInterval(function() {
                var windowHeight = $(window).height();
                var sliderHeight = $("#slider").height();
                var padTop = windowHeight - sliderHeight;
                $("#slider").css({
                    'padding-top': Math.round(padTop / 2) + 'px',
                    'padding-bottom': Math.round(padTop / 2) + 'px'
                });
            }, 10);

        //Parallax js

        parallaxInit();

        function parallaxInit() {

            $('.slider-parallax').parallax("50%", 0.0);
            $('.fact-parallax').parallax("30%", 0.0);
            $('.showcase-parallax').parallax("30%", 0.0);
            $('.testimonial-parallax').parallax("30%", 0.0);
            $('.twitter-parallax').parallax("30%", 0.0);


            /*add as necessary*/
        }



    });



})(jQuery);