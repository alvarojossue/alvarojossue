$(document).on("ready", function(){
	
	console.log('wired');

	// -------- Main name effect ---------- //
	
	$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    	animation: "bounceIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    	separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    	speed: 2000,
    	complete: function () {
        // Called after the entrance animation is executed.
    	}
	});

	// --------- Nav bar fixed after scrolling down --------- //

	var num = $(window).height() * 0.92 //number of pixels before modifying styles

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > num) {
	        $('nav').addClass('fixed');
	        $('#about').addClass('headline-2-after');
	    } else {
	        $('nav').removeClass('fixed');
	        $('#about').removeClass('headline-2-after');
	    }
	});


	// ---- Smooth scroll down/up after click from nav bar ----- //

	var $root = $('html, body');
	var adjustment = $(window).height() * 0.16
	$('a[href*="#"]').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - adjustment 
	    }, 1450);
	    return false;
	});

	// ---- Activate slideRight effect when user scroll down ----- //

	$(window).scroll(function() {
		$('.slideRight-element').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideRight");
			}
		});
	});

	// ---- Activate slideLeft effect when user scroll down ----- //

		$(window).scroll(function() {
		$('.slideLeft-element').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("slideLeft");
			}
		});
	});
})