<template>
  <header class="l-header js-header u-ff-pf">
    <div class="c-logo">
      <h1>
        <a href="/" class="js-ajax-link">
          <img :src="imgSrc" alt="SeDes" class="c-logo__item" width="180">
        </a>
      </h1>
    </div>
    <div class="c-nav-trigger c-nav-trigger js-nav-trigger" v-on:click="toggleMenu" :class="{'is-active': isActive,'c-nav-trigger--top': classNav}">
      <span class="c-nav-trigger__item"></span>
      <span class="c-nav-trigger__item"></span>
      <span class="c-nav-trigger__item"></span>
    </div>
    <ul class="c-nav" :class="{'is-active': isActive,'c-nav--top': classNavTop}">
      <li class="c-nav__item" :class="{'is-active': classTop}"><a href="/" class="c-nav__item__link js-ajax-link" :class="{'is-active': classTop}">TOP</a></li>
      <li class="c-nav__item" :class="{'is-active': classWorks}"><a href="/works/" class="c-nav__item__link js-ajax-link" :class="{'is-active': classWorks}">WORKS</a></li>
      <li class="c-nav__item" :class="{'is-active': classTimeline}"><a href="/timeline/" class="c-nav__item__link js-ajax-link" :class="{'is-active': classTimeline}">TIMELINE</a></li>
    </ul>
  </header>
</template>

<script>
export default {
  //↓ES5までの記法
  data: function () {
    var path = this.$route.path;
    if (path == '/works/') {
      return {
        classTop: false,
        classWorks: true,
        classTimeline: false,
        classNav: false,
        isActive: false,
        classNavTop: false,
        imgSrc: require("~/assets/img/logo.svg"),
      }
    } else if (path.match(/^\/works/)) {
      return {
        classTop: false,
        classWorks: true,
        classTimeline: false,
        classNav: true,
        isActive: false,
        classNavTop: true,
        imgSrc: require("~/assets/img/logo-top.svg"),
      }
    } else if (path.match(/^\/timeline/)) {
      return {
        classTop: false,
        classWorks: false,
        classTimeline: true,
        classNav: false,
        isActive: false,
        classNavTop: false,
        imgSrc: require("~/assets/img/logo.svg"),
      }
    } else {
      return {
        classTop: true,
        classWorks: false,
        classTimeline: false,
        classNav: true,
        classNavTop: true,
        isActive: false,
        imgSrc: require("~/assets/img/logo-top.svg"),
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