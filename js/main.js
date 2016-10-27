$(document).on("ready", function(){

	console.log('wired');
	new WOW().init();

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

	// ---- Activate flipInY effect when user scroll down ----- //
	if ($(window).width() > 1000) {
			$('.profile-image').css('visibility', 'hidden')
			$(window).scroll(function() {
				$('.profile-image').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
					if (imagePos < topOfWindow+700) {
						$(this).css('visibility', 'visible')
						$(this).addClass("animated flipInY");
					}
				});
			});
	}

	// ---- Activate slideRight effect when user scroll down ----- //
	if ($(window).width() > 1000) {
		$('.slideRight-element').css('visibility', 'hidden')
		$(window).scroll(function() {
			$('.slideRight-element').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+800) {
					$(this).addClass("slideRight");
				}
			});
		});
	}


	// ---- Activate fadeInUp effect when user scroll down ----- //
	if ($(window).width() > 1000) {
			$('.js-fadeInUp-element').css('visibility', 'hidden')
			$(window).scroll(function() {
				$('.js-fadeInUp-element').each(function(){
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
					if (imagePos < topOfWindow+800) {
						$(this).css('visibility', 'visible')
						$(this).addClass("animated fadeInUp")
					}
				});
			});
	}

	// ---- Activate slideRight effect for footer when user scroll down ----- //
	if ($(window).width() > 1000) {
		$('.slideLeft-footer').css('visibility', 'hidden')
		$(window).scroll(function() {
			$('.slideLeft-footer').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+1000) {
					$(this).css('visibility', 'visible')
					$(this).addClass("animated slideInRight");
				}
			});
		});
	}

	// ---- Deactivate zoomIn effect for smaller screens ----- //
	if ($(window).width() < 1000) {
			$('.js-zoomIn-element').removeClass("zoomIn");
	}
})