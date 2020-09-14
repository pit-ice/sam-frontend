<template>
  <div class="wrapper">
    <LayoutHeader></LayoutHeader>
    <LayoutContent></LayoutContent>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
import LayoutHeader from '@/layout/LayoutHeader.vue';
import LayoutContent from '@/layout/LayoutContent.vue';
import LayoutFooter from '@/layout/LayoutFooter.vue';

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
  },
};
</script>
