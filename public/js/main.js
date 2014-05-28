(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
	$('.cover').height(winH);
	$('#start').css({ 
		'marginTop': winH
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
	
	var $br = $('#browser');
//	$br.css({
//		left: (winW - 1041) / 2
//	});
	
	$('#services-container .intro-section').height(winH);
	
	var $serTit = $('#services-title');
	
	$serTit.css({
		top: winH / 3
	})
	
	
	$(window).scroll(function() {
		var st = $(window).scrollTop();
		var brLeft = st / 1.5;
		
		if (st < winH) {
			$('.cover').css({
				top: 0 - (st / 3)	
			});
		}
		
		var scale = 1 - (st / 1000);
		
		$('#learn-more').css({
			opacity: 1 - (st / 200),
			webkitTransform: 'translateY(' + (0 + (st / 5)) + 'px)'
		});
		
		$serTit.css({
			webkitTransform: 'translateY(' + (0 - (st / 5)) + 'px)',
			opacity: 1 - (st / 300)
		});

		if (st < winH) {
			$('#services-block-1').add('#services-block-1').css({ opacity: 0 });
		}

		if (st > winH && st < (winH + 300)) {
			$('#services-block-1').css({
				webkitTransform: 'translateY(' + (0 - (st / 10)) + 'px)',
				opacity: 0 + ((st - winH) / 300)
			});
		}
		
		if (st > (winH + 400)) {
			$('#services-block-1').css({
				opacity: 1 - ((st - (winH + 400)) / 300)
			});
		}
		
		if (st > (winH + 800)) {
			$('#services-block-2').css({
				webkitTransform: 'translateY(' + (0 - (st / 10)) + 'px)',
				opacity: 0 + ((st - (winH + 800)) / 300)
			});
		}
		
		if (st > (winH + 1400)) {
			$('#services-block-2').css({
				opacity: 1 - ((st - (winH + 1400)) / 300)
			});
		}
		
		
	});
	
	$('.invoices-block').waypoint(function() {
		$(this).addClass('visible');
	}, { offset: '75%' });
	
	
	
	$(window).load(function() {
		
	});
});