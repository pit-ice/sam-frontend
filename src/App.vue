<template>
  <div id="app">
    <div class="wrapper">
      <LayoutHeader></LayoutHeader>
      <LayoutContent></LayoutContent>
      <LayoutFooter></LayoutFooter>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout/LayoutHeader.vue';
import LayoutContent from '@/components/layout/LayoutContent.vue';
import LayoutFooter from '@/components/layout/LayoutFooter.vue';

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutContent,
    LayoutFooter,
  },
};
</script>
