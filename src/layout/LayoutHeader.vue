<template>
  <div class="header">
    <div class="skip-nav">
      <a href="#content" tabindex="1">본문 바로가기</a>
    </div>
    <div class="inner">
      <h1 class="logo">LOGO</h1>
      <UtilMenu></UtilMenu>
      <Navi></Navi>
    </div>
    <hr class="hidden" />
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
