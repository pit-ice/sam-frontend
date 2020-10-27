<template>
  <div id="content" class="content">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="main-sidebar" v-bind:class="{ divAbsolute: scrollPosition < 660, divFixed: scrollPosition > 660 }">
      <Sidebar></Sidebar>
      <ScrollTop></ScrollTop>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import ScrollTop from '@/components/ScrollTop.vue';

export default {
  components: {
    Sidebar,
    ScrollTop,
  },
  data: function () {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>
