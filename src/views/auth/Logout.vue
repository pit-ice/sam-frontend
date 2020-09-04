<template><div></div></template>

<script>
export default {
  name: 'Logout',
  data() {
    return {};
  },
  beforeCreate() {
    this.$store.dispatch('auth/logout').then(
      () => {
        this.$router.push('/');
      },
      (error) => {
        alert(error.message);
      }
    );
  },
};
</script>
