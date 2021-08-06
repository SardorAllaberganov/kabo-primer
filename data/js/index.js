$(document).ready(function () {
    // sticky navigation on scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $("nav").addClass("fixed");
        } else {
            $("nav").removeClass("fixed");
        }
    });

    /*- animation -*/
	jQuery('.first_animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animated fadeInLeftBig',
		offset: 100    
	}); 

	jQuery('.second_animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animated fadeInRightBig',
		offset: 100    
	}); 

	jQuery('.third_animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animated fadeInUpBig',
		offset: 100    
	});  

	jQuery('.fourth_animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animated fadeInDownBig',
		offset: 100    
	});   
});
