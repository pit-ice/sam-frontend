<template>
  <div class="header">
    <h1>header</h1>
    <LayoutNavi></LayoutNavi>
  </div>
</template>

<script>
import LayoutNavi from '@/layout/LayoutNavi.vue';

export default {
  name: 'Header',
  components: {
    LayoutNavi,
  },
};
</script>
