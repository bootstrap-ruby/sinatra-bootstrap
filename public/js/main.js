(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
	var $cover = $('.cover');
	
	$cover.height(winH);
	
	var coverTop = (winH - $cover.height()) / 2
	
	if (coverTop > 50) {
		$cover.css({
			marginTop: (winH - $cover.height()) / 2
		});
	}
	
	$('#main-intro').css({
		top: (winH - 550) / 2
	});
	
	$('#hc-logo-large').css({
		left: (winW - 180) / 2
	});
	
	$('#main-intro').css({
		left: (winW - $('#main-intro').width()) / 2
	});

	
	$('#start').css({ 
		'marginTop': winH
	});
	
//	$('.mountains').css({
//		left: (winW - 1602) / 2,
//		top: winH - 350
//	});

	
//	$('#rear-mountain').css({
//		top: winH - 300
//	});
	
	
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
	
	$('#proj-invoices').waypoint(function() {
		$(this).addClass('visible');
	}, { offset: '75%' });
	
	$('.full-container').width(winW);
	
	var $aet = $('#scr-aether');
	var $cg = $('#scr-cg');
	var $arev = $('#scr-arev');
	var $palm = $('#scr-palmarinha');
	var $gpc = $('#scr-gpc');
	var $scr = $('.screenshot-wrap .screenshot');
	
	$aet.css({
		left: ($aet.parent().width() - 813) / 2
	});
	
	$('.screenshot-wrap, #browser-frames, #social-web').waypoint(function() {
		$(this).addClass('animate');
	}, { offset: '70%'});
	
	var v = $("#large-cloud-icons g"), cur = 0;
	for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
	function fadeInNextLI() {
	  v.eq(cur++).addClass('popin');
	  if(cur != v.length) setTimeout(fadeInNextLI, 100);
	}
	
	setTimeout(function() {
		fadeInNextLI()
	}, 4000);
	
	setTimeout(function() {
		$('#clouds-pair #icons g').addClass('popin');
	}, 2000)
	
	setTimeout(function() {
		$('#hc-logo-large').addClass('animate');
	}, 500);
	
	setTimeout(function() {
		$('#clouds-container').addClass('animate');
	},	3500);
	
	setTimeout(function() {
		$('#scroll-tip').addClass('animate');
	}, 14000);
	
	setTimeout(function() {
		$('.intro-text').addClass('animate');
	}, 9000);
	
	setInterval(function() {
		
	}, 10000)
	
	setTimeout(function() {
		$('#hc-cup-main').addClass('animate');
	}, 200);
	
	$('#menu-btn').click(function() {
		$('#menu-btn').toggleClass('clicked');
		$('#nav-items').toggle();
		
		return false;
	});
	
//	setTimeout(function(){
//		$('#navbar-main').animate({
//			marginTop: '20px',
//			opacity: 1
//		}, 800);
//	}, 11000);
	
	$(window).load(function() {
		
		$aet.css({
			left: ($aet.parent().width() - $aet.width()) / 2
		});
		$('#intro-screenshots').height($aet.height());
		
		$('#cg-frame .main-frame').attr('height', $cg.height() + 50).attr('width', $cg.width() + 1);
		$('#cg-frame .browser-line').attr('x2', $cg.width());
		$('#cg-frame .address-bar').attr('width', $cg.width() - 90);
		
		$('#arev-frame .main-frame').attr('height', $arev.height() + 50).attr('width', $arev.width() + 1);
		$('#arev-frame .browser-line').attr('x2', $arev.width());
		$('#arev-frame .address-bar').attr('width', $arev.width() - 90);
		
		$('#palm-frame .main-frame').attr('height', $palm.height() + 50).attr('width', $palm.width());
		$('#palm-frame .browser-line').attr('x2', $palm.width());
		$('#palm-frame .address-bar').attr('width', $palm.width() - 90);
		
		$('#gpc-frame .main-frame').attr('height', $gpc.height() + 50).attr('width', $gpc.width() + 1);
		$('#gpc-frame .browser-line').attr('x2', $gpc.width());
		$('#gpc-frame .address-bar').attr('width', $gpc.width() - 90);
		
		skrollr.init();
		
	});
	
});

