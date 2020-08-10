<template>
  <header class="l-header js-header u-ff-pf">
    <div class="c-logo">
      <h1>
        <NuxtLink to="/" class="js-ajax-link">
          <img :src="imgSrc" alt="SeDes" class="c-logo__item" width="180">
        </NuxtLink>
      </h1>
    </div>
    <div class="c-nav-trigger c-nav-trigger js-nav-trigger" v-on:click="toggleMenu" :class="{'is-active': isActive,'c-nav-trigger--top': classNav}">
      <span class="c-nav-trigger__item"></span>
      <span class="c-nav-trigger__item"></span>
      <span class="c-nav-trigger__item"></span>
    </div>
    <ul class="c-nav" :class="{'is-active': isActive,'c-nav--top': classNavTop}">
      <li class="c-nav__item"><NuxtLink to="/" class="c-nav__item__link js-ajax-link">TOP</NuxtLink></li>
      <li class="c-nav__item"><NuxtLink to="/works/" class="c-nav__item__link js-ajax-link">WORKS</NuxtLink></li>
      <li class="c-nav__item"><NuxtLink to="/timeline/" class="c-nav__item__link js-ajax-link">TIMELINE</NuxtLink></li>
      <li class="c-nav__item"><NuxtLink to="/about/" class="c-nav__item__link js-ajax-link">ABOUT</NuxtLink></li>
    </ul>
  </header>
</template>

<script>
export default {
  data: function() {
    var path = $nuxt.$route.path
    if (path == '/works/' || path == '/timeline/') {
      return {
        classNav: false,
        isActive: false,
        classNavTop: false,
        imgSrc: require("~/assets/img/logo.svg"),
      }
    } else {
      return {
        classNav: true,
        classNavTop: true,
        isActive: false,
        imgSrc: require("~/assets/img/logo-top.svg"),
      }
    }
  },
  watch: {
    '$route': function(to, from) {
      if(to.path !== from.path) {
        var path = $nuxt.$route.path
        if (path == '/works/' || path == '/timeline/') {
          this.classNav = false
          this.isActive = false
          this.classNavTop = false
          this.imgSrc = require("~/assets/img/logo.svg")
        } else {
          this.classNav = true
          this.classNavTop = true
          this.isActive = false
          this.imgSrc = require("~/assets/img/logo-top.svg")
        }
      }
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    }
  }
}
</script>