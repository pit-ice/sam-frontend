<template>
  <div id="app">
    <div class="wrapper">
      <layout-header></layout-header>
      <transition name="fade" mode="out-in">
        <layout-content></layout-content>
      </transition>
      <layout-footer></layout-footer>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/layout/LayoutHeader.vue';
import LayoutContent from '@/layout/LayoutContent.vue';
import LayoutFooter from '@/layout/LayoutFooter.vue';

export default {
  name: 'App',
  components: {
    'layout-header': LayoutHeader,
    'layout-content': LayoutContent,
    'layout-footer': LayoutFooter,
  },
};
</script>
