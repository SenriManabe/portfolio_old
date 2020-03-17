<template>
  <div>
  	<Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
	import Header from "@/components/layout/Header.vue";
	import Footer from "@/components/layout/Footer.vue";

	export default {
		components: {
			Header,
			Footer
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