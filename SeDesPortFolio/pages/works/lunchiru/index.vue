<template>
  <div class="c-contents-cover c-contents-cover--main">
    <section id="top" class="c-contents js-contents">
      <div class="c-kv-slider-cover">
        <div class="c-kv-slider c-kv-slider--works is-active">
          <div class="c-kv-slider__item">
            <div class="c-kv-slider__item__cage">
              <img src="~/assets/img/kv/lunchiru_img.png" alt="LUNCHIRU" class="c-kv-slider__item__cage__img">
              <img src="~/assets/img/kv/lunchiru.jpg" alt="car share" class="c-kv-slider__item__cage__img--kv">
            </div>
            <div class="c-kv-slider__item__cage__text">
              <p class="c-kv-slider__tag">UIUX DESIGN</p>
              <h2 class="c-kv-slider__title">LUNCHIRU RENE<span>W</span>AL</h2>
            </div>
            <img src="~/assets/img/kv/lunchiru.jpg" alt="car share" class="c-kv-slider__img">
          </div>
        </div>
      </div>
      <div class="c-contents__item c-contents__item--works-detail c-contents__item--works-detail--center">
        <div class="c-contents__item__text-cage">
          <h3 class="c-title c-title--works-detail">PROJECT EXPLANATION</h3>
          <p class="c-contents__item__text">
            芦屋市との協働によるプロジェクトで、小中学校や保育所の給食の献立表が簡単に見れるアプリです。<br/>
            iOS&Androidアプリのロゴデザイン、UX設計、UIデザインを担当しました。<br/>
            親子両方にとって見やすく、使いやすく、毎日見ても煩くならないデザインを心がけました。<br/>
            UXの範囲では、毎日使うアプリなので、いつ使っても自然と受け入れられ、なおかつ温かみを感じてもらえるように設計しました。<br/>
            UIの範囲では、忙しい親御様がメインで使う想定なので、とにかくシンプルで無駄がなく、使いやすいよう心がけました。
          </p>
        </div>
      </div>
      <div class="c-contents__item c-contents__item--works-detail c-contents__item--works-detail--info">
        <div class="c-contents__item__text-cage">
          <h3 class="c-title c-title--works-detail">USE SOFT</h3>
          <p class="c-contents__item__text">Adobe Illustrator/Adobe Photoshop</p>
          <h3 class="c-title c-title--works-detail">CHARGE</h3>
          <p class="c-contents__item__text">ロゴデザイン・UX設計・UIデザイン</p>
          <h3 class="c-title c-title--works-detail">MEDIA</h3>
          <p class="c-contents__item__text">関西NHK・兵庫県版朝日新聞</p>
        </div>
        <div class="c-contents__item__img-cage c-contents__item__img-cage--slider js-kv-slider--works">
          <img src="~/assets/img/works/lunchiru/lunchiru_item01.png" alt="LUNCHIRU img01" class="c-contents__item__img is-active">
          <img src="~/assets/img/works/lunchiru/lunchiru_item02.png" alt="LUNCHIRU img02" class="c-contents__item__img">
          <img src="~/assets/img/works/lunchiru/lunchiru_item03.png" alt="LUNCHIRU img03" class="c-contents__item__img">
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
      function worksContents() {
        var count = 0,
          interval = 5000,
          $kvSliderWorks = document.getElementsByClassName('js-kv-slider--works'),
          length = ($kvSliderWorks.length) - 1,
          timer = setTimeout(show, interval);

        function show(){
          var timer = setTimeout(show, interval);
          $kvSliderWorks[count].classList.remove("is-active");
          if (count == length) {
            count = 0;
            $kvSliderWorks[count].classList.add("is-active");
          } else {
            count++;
            $kvSliderWorks[count].classList.add("is-active");
          }
        }
      }
      worksContents();
    }
  }
}
</script>