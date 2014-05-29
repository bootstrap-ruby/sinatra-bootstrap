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
	var $ipad = $('#ipad');
	var $iphone = $('#iphone');
	var $soc = $('#social');
	
	$soc.css({
		right: winW - 1170,
		bottom: (winH - 231) / 2
	});
	
	$ipad.css({
		left: winW
	});
	
	$iphone.css({
		left: winW + 200
	});
	

//	$br.css({
//		left: (winW - 1041) / 2
//	});
	
	$('#services-container .intro-section').height(winH);
	
	var $serTit = $('#services-title');
	
	$serTit.css({
		top: winH / 3
	})
	
	var $sb1 = $('#services-block-1');
	var $sb2 = $('#services-block-2');
	var $sb3 = $('#services-block-3');
	
	$sb3.css({
		left: (winW - 700) / 2,
		bottom: (winH - 140) / 2
	});
	
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
			translate: [0, 0 + (st / 5)]
		});
		
		$serTit.css({
			translate: [0, 0 - (st / 5)],
			opacity: 1 - (st / 300)
		});

		if (st < winH) {
			$sb1.add($sb2).css({ opacity: 0 });
		}

		if (st > winH) {
			$sb1.css({
				translate: [0, 0 - (st / 10)],
				opacity: 0 + ((st - winH) / 300)
			});
			
			if (st < (winH + (winW / 1.95))) {
				$ipad.css({
					translate: [0 - ((st - winH) / 1.3), 0]
				});
				
				$iphone.css({
					translate: [0 - ((st - winH) * 1.2), 0]
				});
				
				$br.css({
					scale: 1 - ((st - winH) / 10000)
				});
			}
			
		}
		
		if (st > (winH + 700)) {
			$sb1.css({
				opacity: 1 - ((st - (winH + 700)) / 300)
			});
		}
		
		if (st > (winH + 1000)) {
			var newt = st - (winH + 1000);
			

			$ipad.css({
				bottom: 0 - (newt * 2)
			});
			
			$iphone.css({
				bottom: 0 - (newt * 1)
			});
			
			
			$br.css({
				translate: [0 + newt, 0]
			});

		}
		
		if (st > winH + 1400) {
			var newt = st - (winH + 1400);
			var scale;
			
			if ((0.5 + (newt / 400)) < 1) {
				scale = (0.5 + (newt / 400))
			} else {scale = 1}
			
			$sb2.css({
				translate: [0, 0 - (newt / 10)],
				opacity: 0 + (newt / 300)
			});
			
			$soc.css({
				opacity: 0 + (newt / 400),
				scale: scale,
				translate: [0, 0 - (newt / 50)]
			});
		}
		
		if (st > (winH + 2400)) {
			var newt = st - (winH + 2400)
			
			var matrix = $sb2.css('-webkit-transform').match(/-?[0-9\.]+/g);
			
			$sb2.css({
				translate: [0, matrix[5] - (newt * 1.5)]
			});
			
			var matrix = $soc.css('-webkit-transform').match(/-?[0-9\.]+/g);
			
			$soc.css({
				translate: [0, matrix[5] - newt]
			});
		}
		
		if (st > winH + 3000 && st < winH + 3400) {
			var newt = st - (winH + 3000);
			
			$sb3.css({
				opacity: 0 + (newt / 100)
			});
			
			
			$sb3.find('#rule').width(newt);
		}
		
		if (st > winH + 3500) {
			$sb3.css({
				translate: [0, 0 - (st - (winH + 3500))]
			});
			
		}
		
		
	});
	
	$('.invoices-block').waypoint(function() {
		$(this).addClass('visible');
	}, { offset: '75%' });
	
	
	
	$(window).load(function() {
		
	});
});