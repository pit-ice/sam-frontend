<template>
  <div id="content" class="content">
    <div class="inner">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
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
