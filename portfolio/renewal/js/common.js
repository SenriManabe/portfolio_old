// include jQuery
var menuAction = '.js-menu-action',
	$menuAction = $(menuAction),
	menu = '.js-menu',
	$menu = $(menu),
	header = '.js-header',
	$header = $(header),
	menuBox = '.js-menu-box',
	$menuBox = $(menuBox),
	menuScroll = '.js-menu-scroll',
	$menuScroll = $(menuScroll),
	form = '.js-form',
	$form = $(form),
	formBtn = '.js-form-btn',
	$formBtn = $(formBtn),
	confirm = '.js-confirm',
	$confirm = $(confirm),
	slideContents = '.js-slide-contents',
	$slideContents = $(slideContents),
	sliderCover = '.js-slider-cover',
	$sliderCover = $(sliderCover),
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
	sortAction = '.js-sort-action',
	$sortAction = $(sortAction),
	sortContents = '.js-sort-contents',
	$sortContents = $(sortContents),
	imgPath = '.js-imgPath',
	$imgPath = $(imgPath),
	first = '.js-first',
	$first = $(first),
	imgSize = '.js-img-size',
	$imgSize = $(imgSize),
	topMargin = '.js-top-margin',
	$topMargin = $(topMargin),
	kvSlider = '.js-kv-slider',
	$kvSlider = $(kvSlider),
	navTrigger = '.js-nav-trigger',
	$navTrigger = $(navTrigger),
	wHeight = $contents.eq(0).outerHeight(),
	liCount =  0;

// MENU ACTION
$menuAction.on('click', function(e){
	$(this).toggleClass('is-active');
	if ($(this).hasClass('is-active')) {
		$menu.slideDown();
	} else {
		$menu.slideUp();
	}
});

$(window).on('scroll', function(e) {
	var scTop = $(this).scrollTop();
	if (scTop > wHeight) {
		$header.addClass('is-active');
	} else {
		$header.removeClass('is-active');
	}
});

$(function() {
	var navLink = $menuScroll,
		contentsArr = new Array();

	for (var i = 0; i < navLink.length; i++) {
		var targetContents = navLink.eq(i).attr('href');
		if(targetContents.charAt(0) == '#') {
			var targetContentsTop = $(targetContents).offset().top - $header.outerHeight(),
				targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true) - 1;
				contentsArr[i] = [targetContentsTop, targetContentsBottom]
		}
	};

	function currentCheck() {
		var windowScrolltop = $(window).scrollTop();
		for (var i = 0; i < contentsArr.length; i++) {
			if(contentsArr[i][0] <= windowScrolltop && contentsArr[i][1] >= windowScrolltop) {
				navLink.removeClass('is-active');
				navLink.eq(i).addClass('is-active');
				i == contentsArr.length;
			}
		};
	}

	$(window).on('load scroll', function() {
		currentCheck();
	});

	navLink.on('click', function() {
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - $header.outerHeight() + 1
		}, 300);
		return false;
	});
});

$formBtn.on('click', function(e) {
	e.preventDefault();

	var nameVal = $inputName.val(),
		mailVal = $inputMail.val(),
		textVal = $textArea.val();

	if (nameVal.length != 0 && mailVal.length != 0 && textVal.length != 0) {
		$inputAdd.removeClass('is-error');
		$confirm.append('<div class="c-form-overlay"><div class="c-form-confirm"><h2 class="c-title c-title--contents">Confirm<br/><span class="c-title__caption">-内容確認-</span></h2><p class="c-contents__item__text u-mb25">以下の内容で送信してよろしいでしょうか？</p><div class="c-form"><p class="c-form__name">NAME</p><p class="c-form__val_confirm js-val-confirm">' + nameVal + '</p><p class="c-form__name">E-MAIL</p><p class="c-form__val_confirm js-val-confirm">' + mailVal + '</p><p class="c-form__name">CONTENT</p><p class="c-form__val_confirm js-val-confirm">' + textVal + '</p><div class="c-form-btn-box"><p class="c-form__input c-form__input--btn js-form-btn--submit">送信する</p><p class="c-form__input c-form__input--btn c-form__input--btn--cancel js-form-btn--cancel">キャンセルする</p></div></div></div></div>');
	} else {
		$inputAdd.removeAttr('placeholder');
		if(nameVal.length == 0) {
			$inputName.attr('placeholder', '正しい内容を入力してください。');
			$inputName.addClass('is-error');
		}
		if(mailVal.length == 0) {
			$inputMail.attr('placeholder', '正しい内容を入力してください。');
			$inputMail.addClass('is-error');
		}
		if(textVal.length == 0) {
			$textArea.addClass('is-error');
		}
	}
});

$inputAdd.on('keydown', function() {
	if ($(this).val() != 0) {
		$(this).removeClass('is-error');
	}
});

$confirm.on('click', '.js-form-btn--cancel', function(e) {
	$confirm.empty();
});

$confirm.on('click', '.js-form-btn--submit', function(e) {
	$form.submit();
});

$sortAction.on('click', function(e) {
	var value = $(this).text();

	$sortAction.removeClass('is-active');
	$(this).addClass('is-active');

	if (value == 'ALL') {
		$sortContents.removeClass('is-none is-active');
	} else {
		$sortContents.removeClass('is-active');
		$sortContents.addClass('is-none');
		$('[data-type="' + value + '"]').addClass('is-active').removeClass('is-none');
	}
});

$(function () {
	var thumbsResize = function() {
		var ua = navigator.userAgent,
			$thumbs = $('.js-thumbs'),
			coverWidth = $sliderCover.width(),
			thumbsSize = (coverWidth-250)/6;
		if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
			$thumbs.width(coverWidth);
			$thumbs.height(coverWidth);
		} else {
			$thumbs.width(thumbsSize);
			$thumbs.height(thumbsSize);
		}
	}
	thumbsResize();
	$(window).resize(function() {
		thumbsResize();
	});
})

$imgPath.each(function() {
	var ua = navigator.userAgent;
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
		var path = $(this).attr('src').replace("graphic", "thumbs").replace("logo", "thumbs").replace("works", "thumbs");
		$(this).attr('src', path);
		console.log(path);
	}
});

$(function(){
	setTimeout(function(){
		$first.fadeOut();
	},3000);
});

$imgSize.each(function() {
	var imgHeight = $(this).outerHeight();
	
	$topMargin.css({
		marginTop: imgHeight - 10
	});
});

$navTrigger.on('click', function(event) {
	$(this).toggleClass('is-active');
	$(this).next().fadeToggle();
});

$(function(){
	var count = 0,
		interval = 5000;

	var timer = setInterval(show, interval);
	$('.js-count-stop').hover(function(){
		clearInterval(timer);
    }, function(){
		timer = setInterval(show, interval);
    })
	function show(){
		$kvSlider.children().eq(count).removeClass('is-active');
		$kvSlider.children().eq(count).next().addClass('is-active');
		if (count == 4) {
			count = 0;
			$kvSlider.children().eq(count).addClass('is-active');
		} else {
			count++;
		}
	}
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// window resize
window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});