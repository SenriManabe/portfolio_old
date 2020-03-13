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
  data() {
    var path = this.$route.path
    if (path.match(/^\/works/) || path.match(/^\/timeline/)) {
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
  }
}
</script>
