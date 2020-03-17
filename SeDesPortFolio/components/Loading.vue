<template>
  <div class="c-contents-loading" :style="style" ref="lavContainer"></div>
</template>

<script>
  import lottie from 'lottie-web';
  export default {
    props: {
      options: {
        type: Object,
        required: true,
        loop: false,
        autoplay: true
      },
    },

    data: function () {
      if (process.client) {
        return {
          style: {
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            margin: '0 auto'
          },
          classChange() {
            var loadingContents = document.getElementsByClassName('c-contents-loading'),
                timer = setTimeout(removeClass, 3000);
            loadingContents[0].classList.add("is-active");
            function removeClass(){
              loadingContents[0].classList.remove("is-active");
              var timer = clearTimeout(removeClass, 3000);
            }
          }
        }
      }
    },
    mounted () {
      this.anim = lottie.loadAnimation({
          container: this.$refs.lavContainer,
          renderer: 'svg',
          loop: this.options.loop,
          autoplay: this.options.autoplay !== false,
          animationData: this.options.animationData.default,
          rendererSettings: this.options.rendererSettings
        }
      );
      this.$emit('animCreated', this.anim)
      this.classChange();
    },
    watch: {
      '$route': function(to, from) {
          if(to.path !== from.path) {
            this.classChange();
          }
      }
    }
  }
</script>