<template>
  <footer class="l-footer" :class="{'l-footer--top': classTop}">
    <div class="c-footer-cover u-cf" :class="{'c-footer-cover--top': classTopCover}">
      <p>&copy; 2020 SeDes.</p>
    </div>
  </footer>
</template>

<script>
export default {
  //↓ES5までの記法
  data: function() {
    var path = this.$route.path
    if (path.match(/^\/works/) || path.match(/^\/timeline/) || path.match(/^\/about/)) {
      return {
        classTop: false,
        classTopCover: false
      }
    } else {
      return {
        classTop: true,
        classTopCover: true
      }
    }
  },
  watch: {
  '$route': function(to, from) {
      if(to.path !== from.path) {
        var path = $nuxt.$route.path
        if (path.match(/^\/works/) || path.match(/^\/timeline/) || path.match(/^\/about/)) {
          this.classTop = false
          this.classTopCover = false
        } else {
          this.classTop = true
          this.classTopCover = true 
        }
      }
    }
  }
}
</script>
