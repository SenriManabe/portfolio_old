<template>
  <div>
    <loading :options="defaultOptions" v-on:animCreated="handleAnimation" v-show="firstLoad"/>
  	<!-- <Header /> -->
    <nuxt />
    <Footer />
  </div>
</template>

<script>
	// import Header from "@/components/layout/Header.vue";
	import Footer from "@/components/layout/Footer.vue";
  import Loading from "@/components/Loading.vue";
  import * as animationData from "@/assets/animation/loading.json";

	export default {
		components: {
      Loading,
			// Header,
			Footer
		},data () {
      return {
        swiperOption: {
          slidesPerView: 'auto',
          centeredSlides: true,
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          pagination: { //ページネーション設定
            el: '.c-kv-slider-nav',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        defaultOptions: { animationData: animationData },
        animationSpeed: 1,
        firstLoad: true
      }
    },

    watch: {
      '$route': function(to, from) {
        if(to.path !== from.path) {
          this.firstLoad = false;
        }
      }
    },
    methods: {
      handleAnimation: function(anim) {
        this.anim = anim;
      }
    }
	};
  if (process.client) {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // window resize
    window.addEventListener('resize', () => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
</script>