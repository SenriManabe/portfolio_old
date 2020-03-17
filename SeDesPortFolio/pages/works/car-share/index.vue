<template>
  <div class="c-contents-cover c-contents-cover--main">
    <section id="top" class="c-contents js-contents">
      <div class="c-kv-slider-cover">
        <div class="c-kv-slider c-kv-slider--works is-active">
          <div class="c-kv-slider__item">
            <div class="c-kv-slider__item__cage">
              <img src="~/assets/img/kv/car-share_img.png" alt="car share app" class="c-kv-slider__item__cage__img">
              <img src="~/assets/img/kv/car-share.jpg" alt="car share" class="c-kv-slider__item__cage__img--kv">
            </div>
            <div class="c-kv-slider__item__cage__text">
              <p class="c-kv-slider__tag">UIUX DESIGN</p>
              <h2 class="c-kv-slider__title">CAR SHARE APP RENE<span>W</span>AL</h2>
            </div>
            <img src="~/assets/img/kv/car-share.jpg" alt="car share" class="c-kv-slider__img">
          </div>
        </div>
      </div>
      <div class="c-contents__item c-contents__item--works-detail c-contents__item--works-detail--center">
        <div class="c-contents__item__text-cage">
          <h3 class="c-title c-title--works-detail">PROJECT EXPLANATION</h3>
          <p class="c-contents__item__text">
            とあるカーシェアアプリのリニューアルデザイン案です。<br/>
            iOS&AndroidアプリUX設計、UIデザインを担当しました。<br/><br/>

            ターゲットユーザーが20代中頃〜30代中頃の男性で、流行り物への関心が高く、スタイリッシュな物が好みという事だったので、シンプルですが何度見てもカッコ良いと感じるように心がけ、デザインしました。<br/>UIの範囲では、ユーザーのその時の状況に応じて最適なコンテンツが表示されているよう心がけ、そこから派生する導線設計まで意識しました。
          </p>
        </div>
      </div>
      <div class="c-contents__item c-contents__item--works-detail c-contents__item--works-detail--info">
        <div class="c-contents__item__text-cage">
          <h3 class="c-title c-title--works-detail">USE SOFT</h3>
          <p class="c-contents__item__text">Figma/Adobe Illustrator/Adobe Photoshop</p>
          <h3 class="c-title c-title--works-detail">CHARGE</h3>
          <p class="c-contents__item__text">UX設計・UI設計</p>
        </div>
        <div class="c-contents__item__img-cage c-contents__item__img-cage--slider">
          <img src="~/assets/img/works/car-share/car-share_item01.png" alt="car share app img01" class="c-contents__item__img is-active js-kv-slider--works">
          <img src="~/assets/img/works/car-share/car-share_item02.png" alt="car share app img02" class="c-contents__item__img js-kv-slider--works">
          <img src="~/assets/img/works/car-share/car-share_item03.png" alt="car share app img03" class="c-contents__item__img js-kv-slider--works">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  //↓ES5までの記法
  data: function () {
    if (process.client) {
      return {
        worksContents() {
          var count = 0,
            interval = 5000,
            $kvSliderWorks = document.getElementsByClassName('js-kv-slider--works'),
            length = ($kvSliderWorks.length) - 1,
            timer = setTimeout(show, interval);

          function show(){
            var path = $nuxt.$route.path
            if (path == '/works/car-share/' || path == '/works/hakobiya/' || path == '/works/lunchiru/') {
              var timer = setTimeout(show, interval);
              $kvSliderWorks[count].classList.remove("is-active");
              if (count == length) {
                count = 0;
                $kvSliderWorks[count].classList.add("is-active");
              } else {
                count++;
                $kvSliderWorks[count].classList.add("is-active");
              }
            } else {
              var timer = clearTimeout(show, interval);
            }
          }
        }
      }
    }
  },
  watch: {
    '$route': function(to, from) {
      if(to.path !== from.path) {
        this.worksContents();
      }
    }
  },
  mounted() {
    this.worksContents();
  },
}
</script>