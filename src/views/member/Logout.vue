<template>
  <div>LOGOUT PAGE</div>
</template>

<script>
export default {
  name: 'Logout',
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('auth/logout');
  },
};
</script>
