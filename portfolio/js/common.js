// include jQuery
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

//form関係はそのうち使うかもしれないからコメントアウト
// $formBtn.on('click', function(e) {
// 	e.preventDefault();

// 	var nameVal = $inputName.val(),
// 		mailVal = $inputMail.val(),
// 		textVal = $textArea.val();

// 	if (nameVal.length != 0 && mailVal.length != 0 && textVal.length != 0) {
// 		$inputAdd.removeClass('is-error');
// 		$confirm.append('<div class="c-form-overlay"><div class="c-form-confirm"><h2 class="c-title c-title--contents">Confirm<br/><span class="c-title__caption">-内容確認-</span></h2><p class="c-contents__item__text u-mb25">以下の内容で送信してよろしいでしょうか？</p><div class="c-form"><p class="c-form__name">NAME</p><p class="c-form__val_confirm js-val-confirm">' + nameVal + '</p><p class="c-form__name">E-MAIL</p><p class="c-form__val_confirm js-val-confirm">' + mailVal + '</p><p class="c-form__name">CONTENT</p><p class="c-form__val_confirm js-val-confirm">' + textVal + '</p><div class="c-form-btn-box"><p class="c-form__input c-form__input--btn js-form-btn--submit">送信する</p><p class="c-form__input c-form__input--btn c-form__input--btn--cancel js-form-btn--cancel">キャンセルする</p></div></div></div></div>');
// 	} else {
// 		$inputAdd.removeAttr('placeholder');
// 		if(nameVal.length == 0) {
// 			$inputName.attr('placeholder', '正しい内容を入力してください。');
// 			$inputName.addClass('is-error');
// 		}
// 		if(mailVal.length == 0) {
// 			$inputMail.attr('placeholder', '正しい内容を入力してください。');
// 			$inputMail.addClass('is-error');
// 		}
// 		if(textVal.length == 0) {
// 			$textArea.addClass('is-error');
// 		}
// 	}
// });

// $inputAdd.on('keydown', function() {
// 	if ($(this).val() != 0) {
// 		$(this).removeClass('is-error');
// 	}
// });

// $confirm.on('click', '.js-form-btn--cancel', function(e) {
// 	$confirm.empty();
// });

// $confirm.on('click', '.js-form-btn--submit', function(e) {
// 	$form.submit();
// });

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
let vh = window.innerHeight * 0.01;
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