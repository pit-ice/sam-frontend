<template>
  <div class="content">
    <FloatMenu></FloatMenu>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <ScrollTop></ScrollTop>
  </div>
</template>

<script>
import FloatMenu from '@/components/FloatMenu.vue';
import ScrollTop from '@/components/ScrollTop.vue';

export default {
  components: {
    FloatMenu,
    ScrollTop,
  },
};
</script>
