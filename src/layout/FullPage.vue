<template>
  <div class="layout">
    <h2>Full Layout</h2>
    <transition name="fade-in-up">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
