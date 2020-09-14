<template>
  <div class="header">
    <div class="inner">
      <h1 class="logo">LOGO</h1>
      <Navi></Navi>
      <UtilMenu></UtilMenu>
    </div>
  </div>
</template>

<script>
import Navi from '@/layout/Navi.vue';
import UtilMenu from '@/layout/UtilMenu.vue';

export default {
  components: {
    Navi,
    UtilMenu,
  },
};
</script>
