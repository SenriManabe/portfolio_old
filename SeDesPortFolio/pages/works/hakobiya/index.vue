<template>
  <div class="c-contents-cover c-contents-cover--main">
    <section id="top" class="c-contents js-contents">
      <div class="c-kv-slider-cover">
        <div class="c-kv-slider c-kv-slider--works is-active">
          <div class="c-kv-slider__item">
            <div class="c-kv-slider__item__cage">
              <img src="~/assets/img/kv/hakobiya_img.png" alt="HAKOBIYA app" class="c-kv-slider__item__cage__img">
            </div>
            <div class="c-kv-slider__item__cage__text">
              <p class="c-kv-slider__tag">UIUX DESIGN</p>
              <h2 class="c-kv-slider__title">HAKOBI<span>Y</span>A APP DESIGN</h2>
            </div>
            <img src="~/assets/img/kv/hakobiya.jpg" alt="HAKOBIYA" class="c-kv-slider__img">
          </div>
        </div>
      </div>
      <div class="c-contents__item c-contents__item--works-detail c-contents__item--works-detail--center">
        <div class="c-contents__item__text-cage">
          <h3 class="c-title c-title--works-detail">PROJECT EXPLANATION</h3>
          <p class="c-contents__item__text">
            「旅を仕事にしよう」というコンセプトを基に、海外旅行者と海外製品がほしい人をマッチングさせるアプリです。
            iOS&AndroidアプリUX設計、UIデザインを担当しました。<br/><br/>

            ターゲットに日本以外の国も含まれるので、多国籍感をイメージしつつ、スタートアップらしい情熱や日本初という事で赤色をベースに作成しています。
            どの国の人が使っても、この操作の次はこれが来てほしいんだよね！というのを意識しながらデザインしました。
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
        <div class="c-contents__item__img-cage c-contents__item__img-cage--slider js-kv-slider--works">
          <img src="~/assets/img/works/hakobiya/hakobiya_item01.png" alt="HAKOBIYA img01" class="c-contents__item__img is-active">
          <img src="~/assets/img/works/hakobiya/hakobiya_item02.png" alt="HAKOBIYA img02" class="c-contents__item__img">
          <img src="~/assets/img/works/hakobiya/hakobiya_item03.png" alt="HAKOBIYA img03" class="c-contents__item__img">
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