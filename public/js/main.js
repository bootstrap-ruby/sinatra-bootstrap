(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
	$('.cover').height(winH - 1);
	$('#start').css({ 
		'marginTop': winH - 55
	});
	
	$(window).scroll(function() {
		var st = $(window).scrollTop();
		
		if (st < winH) {
			$('.cover').css({
				top: 0 - (st / 1.5)	
			});
		}
	});
});