$(document).on("ready", function(){
	
	console.log('wired');
	
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


	var num = $(window).height() * 0.90 //number of pixels before modifying styles

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > num) {
	        $('#nav').addClass('fixed');
	    } else {
	        $('#nav').removeClass('fixed');
	    }
	});

})