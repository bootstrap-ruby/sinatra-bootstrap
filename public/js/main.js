(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
	var $cover = $('.cover');
	
	var coverTop = (winH - $cover.height()) / 2
	
	if (coverTop > 50) {
		$cover.css({
			marginTop: (winH - $cover.height()) / 2
		});
	}
	
	
	$('#start').css({ 
		'marginTop': winH
	});
	
//	$('#responsive-slides').cycle({
//		timeout: 4000,
//		delay: 500,
//		speed: 700
//	});
//	
//	$('#ticker').cycle({
//		speed: 400,
//		timeout: 4300,
//		fx: 'scrollUp'
//	});
	
	$('.invoices-block').waypoint(function() {
		$(this).addClass('visible');
	}, { offset: '75%' });
	
	skrollr.init();
	
	var $aet = $('#scr-aether');
	var $cg = $('#scr-cg');
	
	$aet.css({
		left: ($aet.parent().width() - 813) / 2
	});
	
	$('.screenshot-wrap').waypoint(function() {
		$(this).addClass('animate');
	}, { offset: '50%'});
	
	$(window).load(function() {
		$('body').addClass('loaded');
		$aet.css({
			left: ($aet.parent().width() - $aet.width()) / 2
		});
		$('#intro-screenshots').height($aet.height());
		
		$('.main-frame').attr('height', $cg.height() + 50).attr('width', $cg.width());
		$('#browser-line').attr('x2', $cg.width());
		$('#address-bar').attr('width', $cg.width() - 90);
	});
	
});

