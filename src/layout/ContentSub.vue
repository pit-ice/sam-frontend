<template>
  <div id="content" class="content">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="sub-sidebar">
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
};
</script>
