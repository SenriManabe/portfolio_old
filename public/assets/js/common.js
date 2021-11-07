$(function(){
  var $navTrigger = $('.js-nav-trigger'),
      $moveImg = $('.js-move-img'),
      $contentsSwipe = $('.js-contents-swipe'),
      $swipeBox = $('.js-swipe-box'),
      $swipeWork = $('.js-swipe-work'),
      $pn = $('.js-pn'),
      count = 0;

  $navTrigger.on('click', function() {
    $(this).toggleClass('is-active');
    $(this).next().fadeToggle();
  });

  $contentsSwipe.on('click', function() {
    count++;
    var length = $swipeBox.length,
        boxHeight = ($swipeBox.outerHeight() + 74) * count,
        swipe = boxHeight * - 1;

    if (length > count) {
      $swipeBox.css({
        transform: 'translateY(' + swipe + 'px)',
      })
    }
  });

  $swipeWork.each(function() {
    let $children = $(this).children();

    $children.css({
      minWidth: $(document).outerWidth(),
    });
  });

  $pn.children().on('click', function(e) {
    var swipeWorkWidth = $(document).outerWidth(),
        $swipeContents = $swipeWork.children(),
        index = $pn.children().index(this),
        $target = $(e.target);

    if (count == 0 && $target.is('.js-prev')) {
      count = ($swipeContents.length - 1) * - 1;
    } else if(index == 0) {
      count++;
    } else if(count == ($swipeContents.length - 1) * - 1) {
      count = 0;
    } else {
      count--;
    }

    console.log(count, ($swipeContents.length - 1) * - 1)

    $swipeContents.css({
      transform: 'translateX(' + swipeWorkWidth * count + 'px)',
    });
  });

  $(document).on('mousemove', function() {
    var x = event.screenX / 200,
        y = event.screenY / 200;
    $moveImg.css({
      transform: 'translate(' + x + 'px, ' + y + 'px)',
    });
  });

  function isSmartPhone() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      window.addEventListener('deviceorientation', function(e) {
        var alpha = e.alpha / 200,
            beta  = e.beta / 200,
            gamma = e.gamma / 200;

        $moveImg.css({
          transform: 'translate(' + beta + 'px, ' + gamma + 'px)',
        });
      }, false);
    } else {
      console.log('PCだぞこれ');
    }
  }
  isSmartPhone();
});