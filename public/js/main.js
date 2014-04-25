(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
	$('.cover').height(winH - 1);
	$('#start').css({ 
		'marginTop': winH - 5
	});
	
	$('#responsive-slides').cycle({
		timeout: 4000,
		delay: 500,
		speed: 700
	});
	
	$('#ticker').cycle({
		speed: 400,
		timeout: 4300,
		fx: 'scrollUp'
	});
	
	$(window).scroll(function() {
		var st = $(window).scrollTop();
		
		if (st < winH) {
			$('.cover').css({
				top: 0 - (st / 1.5)	
			});
		}
	});
	
	$(window).load(function() {
		
	});
});