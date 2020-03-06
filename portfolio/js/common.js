var form = '.js-form',
	$form = $(form),
	formBtn = '.js-form-btn',
	$formBtn = $(formBtn),
	confirm = '.js-confirm',
	$confirm = $(confirm),
	inputName = '.js-input-name',
	$inputName = $(inputName),
	inputMail = '.js-input-mail',
	$inputMail = $(inputMail),
	textArea = '.js-textarea',
	$textArea = $(textArea),
	inputAdd = '.js-input-add',
	$inputAdd = $(inputAdd),
	contents = '.js-contents',
	$contents = $(contents),
	kvSlider = '.js-kv-slider',
	$kvSlider = $(kvSlider),
	navTrigger = '.js-nav-trigger',
	$navTrigger = $(navTrigger),
	ajaxLink = '.js-ajax-link',
	$ajaxLink = $(ajaxLink),
	ajaxChange = '.js-ajax-change',
	$ajaxChange = $(ajaxChange),
	wHeight = $contents.eq(0).outerHeight(),
	liCount =  0;

// SPのGnavi設定
$navTrigger.on('click', function(event) {
	$(this).toggleClass('is-active');
	$(this).next().fadeToggle();
});

// fade slider設定
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

// view height設定
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// window resize
window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var lastpage = "index.html",
	ref = document.referrer;

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