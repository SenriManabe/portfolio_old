<template>
  <div class="l-main">
    <div class="c-contents-cover c-contents-cover--main">
      <section id="top" class="c-contents c-contents--top js-contents">
        <div class="c-kv">
          <img src="~/assets/img/logo.svg" alt="SeDes" class="c-kv__logo">
          <div class="c-kv__img">
            <a href="/works/car-share/">
              <img id="js-move-img" src="~/assets/img/kv/kv.png" alt="car share" class="c-kv__img__item" width="489">
            </a>
          </div>
        </div>
      </section>
      <section id="works" class="c-contents c-contents--works js-contents">
        <h2 class="c-title c-title--works-index c-title--works-index--center">INVOLVED IN PRODUCTS</h2>
        <div class="c-work-item-cover">
          <div class="c-work-item c-work-item--car-share">
            <a href="/works/car-share/">
                <h4 class="c-title c-title--works-item">CAR CHARE<br/>APP</h4>
                <img id="js-move-img" src="~/assets/img/kv/car-share_img.png" alt="car share" class="c-kv__img__item" width="211">
              </a>
          </div>

          <div class="c-work-item c-work-item--darkforce">
            <a href="/works/darkforce/">
                <h4 class="c-title c-title--works-item">DARK FORCE<br/>LOGO</h4>
                <img id="js-move-img" src="~/assets/img/kv/darkforce_img.png" alt="darkforce" class="c-kv__img__item" width="282">
              </a>
          </div>

          <div class="c-work-item c-work-item--lunchiru">
            <a href="/works/lunchiru/">
                <h4 class="c-title c-title--works-item">LUNCHIRU<br/>APP</h4>
                <img id="js-move-img" src="~/assets/img/kv/lunchiru_img.png" alt="lunchiru" class="c-kv__img__item" width="211">
              </a>
          </div>

          <div class="c-work-item c-work-item--hakobiya">
            <a href="/works/hakobiya/">
                <h4 class="c-title c-title--works-item">HAKOBIYA<br/>APP</h4>
                <img id="js-move-img" src="~/assets/img/kv/hakobiya_img.png" alt="car share" class="c-kv__img__item" width="211">
              </a>
          </div>

          <div class="c-work-item c-work-item--hakobiya-logo">
            <a href="/works/hakobiya-logo/">
                <h4 class="c-title c-title--works-item">HAKOBIYA<br/>LOGO</h4>
                <img id="js-move-img" src="~/assets/img/kv/hakobiya-logo_img.png" alt="car share" class="c-kv__img__item" width="296">
              </a>
          </div>
        </div>
        <a href="/works/" class="c-link c-link--more">AND MORE</a>
      </section>
      <section id="about" class="c-contents c-contents--about js-contents">
        <h2 class="c-title c-title--about">
          <span>ABOUT ME</span>
          SENRI MANABE
        </h2>
        <p class="c-text c-text--read">
          いろんな所でいろんなデザインをやってます。<br/>
          アプリ/Web/業務システム/ロゴ/チラシ/Webバナー/新聞広告などなど。<br/>
          ご要望、ご依頼の方は「<a href="mailto:senri.dr@gmail.com">senri.dr@gmail.com</a>」までよろしくお願い致します。
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  //↓ES5までの記法
  data: function () {
    if (process.client) {
      return {
        itemMove() {
          let title = document.getElementById('js-move-img');
          document.addEventListener('mousemove', event => {
            var x = Math.round(event.pageX / 150);
            var y = Math.round(event.pageY / 150);

            title.style.marginLeft = -x +'px';
            title.style.marginTop = -y +'px';
          });
        }
      }
    }
  },
  watch: {
    '$route': function(to, from) {
      if(to.path !== from.path) {
        this.itemMove();
      }
    }
  },
  mounted() {
    this.itemMove();
  },
}
</script>