<template>
  <div class="content">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="wrap-to-top">
      <button v-show="scrollY > 100" @click="toTop">TOP</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scrollY: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scrollY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>
