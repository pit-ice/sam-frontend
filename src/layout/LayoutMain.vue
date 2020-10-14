<template>
  <div class="wrapper">
    <LayoutHeader></LayoutHeader>
    <ContentMain></ContentMain>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
import LayoutHeader from '@/layout/LayoutHeader.vue';
import ContentMain from '@/layout/ContentMain.vue';
import LayoutFooter from '@/layout/LayoutFooter.vue';

export default {
  name: 'App',
  components: {
    LayoutHeader,
    ContentMain,
    LayoutFooter,
  },
};
</script>
