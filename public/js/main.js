(function($){})(window.jQuery);

var winH = $(window).height();
var winW = $(window).width();

$(document).ready(function() {
	$('.cover').height(winH * .8);
	$('.main-content').css({ 
		'marginTop': winH * .8
	});
});