var kvSlider = '.js-kv-slider',
	$kvSlider = $(kvSlider),
	navTrigger = '.js-nav-trigger',
	$navTrigger = $(navTrigger),
	ajaxLink = '.js-ajax-link',
	$ajaxLink = $(ajaxLink),
	ajaxChange = '.js-ajax-change',
	$ajaxChange = $(ajaxChange),
	slideNav = '.js-slider-nav',
	$slideNav = $(slideNav),
	sliderPn = '.js-slider-pn',
	$sliderPn = $(sliderPn),
	count = 0;

// SPのGnavi設定
function menu(){
	$navTrigger.on('click', function(event) {
		$(this).toggleClass('is-active');
		$(this).next().fadeToggle();
	});
}

function sliderContents(){
	$kvSlider.children().removeClass('is-active');
	$kvSlider.children().eq(count).addClass('is-active');
}

// fade slider設定
var interval = 5000,
	length = ($kvSlider.children().length) - 1;


// slider設定 -navigation-
$slideNav.on('click', function() {
	count = $(this).index();

	$slideNav.removeClass('is-active');
	$(this).addClass('is-active');

	sliderContents();
});
// slider設定 -arrow-
$sliderPn.on('click', function() {
	var index = $(this).index();
	if (index == 1) {
		if (count < 4) {
			count++;
		} else if(count == 4) {
			count = 0;
		}
	} else if(index == 0) {
		if (count > 0) {
			count--;
		} else if(count == 0) {
			count = 4;
		}
	}
	sliderContents();
	$slideNav.removeClass('is-active');
	$slideNav.eq(count).addClass('is-active');
});

// slider設定 -swipe-
$kvSlider.on('touchstart', onTouchStart); //指が触れたか検知
$kvSlider.on('touchmove', onTouchMove); //指が動いたか検知
$kvSlider.on('touchend', onTouchEnd); //指が離れたか検知
var direction, position;

function onTouchStart(event) {
	position = getPosition(event);
	direction = '';
}
function onTouchMove(event) {
	if (position - getPosition(event) > 30) {
		direction = 'left';
    } else if (position - getPosition(event) < -30){
		direction = 'right';
	}
}
function onTouchEnd(event) {
	if (direction == 'right'){
		if (count > 0) {
			count--;
		} else if(count == 0) {
			count = 4;
		}
	} else if (direction == 'left'){
		if (count < 4) {
			count++;
		} else if(count == 4) {
			count = 0;
		}
	}
	sliderContents();
	$slideNav.removeClass('is-active');
	$slideNav.eq(count).addClass('is-active');
}
// 横方向の座標を取得
function getPosition(event) {
	return event.originalEvent.touches[0].pageX;
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
	});
});

$(document).on('click', ajaxLink, function(event) {
	event.preventDefault();
	var link = $(this).attr("href");

	$ajaxChange.fadeOut(300, function() {
		getPage(link);
	});
});

$(document).ajaxComplete(function() {
	count = 0;
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
vhConf();