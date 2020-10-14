<template>
  <div class="wrapper">
    <LayoutHeader></LayoutHeader>
    <ContentSub></ContentSub>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
import LayoutHeader from '@/layout/LayoutHeader.vue';
import ContentSub from '@/layout/ContentSub.vue';
import LayoutFooter from '@/layout/LayoutFooter.vue';

export default {
  name: 'App',
  components: {
    LayoutHeader,
    ContentSub,
    LayoutFooter,
  },
};
</script>
