var kvSlider = '.js-kv-slider',
	$kvSlider = $(kvSlider),
	navTrigger = '.js-nav-trigger',
	$navTrigger = $(navTrigger),
	ajaxLink = '.js-ajax-link',
	$ajaxLink = $(ajaxLink),
	ajaxChange = '.js-ajax-change',
	$ajaxChange = $(ajaxChange),
	liCount =  0;

// SPのGnavi設定
function menu(){
	$navTrigger.on('click', function(event) {
		$(this).toggleClass('is-active');
		$(this).next().fadeToggle();
	});
}

// fade slider設定
function slider(){
	$(function(){
		var count = 0,
			interval = 5000
			length = ($kvSlider.children().length) - 1;

		var timer = setInterval(show, interval);
		$('.js-count-stop').hover(function(){
			clearInterval(timer);
	    }, function(){
			timer = setInterval(show, interval);
	    })
		function show(){
			$kvSlider.children().eq(count).removeClass('is-active');
			$kvSlider.children().eq(count).next().addClass('is-active');
			if (count == length) {
				count = 0;
				$kvSlider.children().eq(count).addClass('is-active');
			} else {
				count++;
			}
		}
	});
}

// view height設定
function vhConf(){
	var vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	// window resize
	window.addEventListener('resize', () => {
	    vh = window.innerHeight * 0.01;
	    document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
}

var ref = document.referrer;

$(window).on('popstate', function(event){
	$ajaxChange.fadeOut(300, function() {
		getPage(ref);
		if ($kvSlider.length == 1) {
			slider();
		}
	});
});

$(document).on('click', ajaxLink, function(event) {
	event.preventDefault();
	var link = $(this).attr("href");

	$ajaxChange.fadeOut(300, function() {
		getPage(link);
		if ($kvSlider.length == 1) {
			slider();
		}
	});
});

function getPage(elm){
	$.ajax({
		type: 'GET',
		url: elm,
		dataType: 'html',
		success: function(data){
			$ajaxChange.html(data).fadeIn(300);
			history.pushState(null, null, elm);
		},
		error:function() {
			console.log('ERROR!!!!');
		}
	});
}

/** 初回ロード時にコールバックを実行 **/
menu();
if ($kvSlider.length == 1) {
	slider();
}
vhConf();