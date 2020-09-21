<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // computed: {
  //   loggedIn() {
  //     return this.$store.state.auth.isAuthenticated;
  //   },
  //   userEmail() {
  //     return this.$store.state.auth.user?.email;
  //   },
  //   isAdmin() {
  //     return this.$store.state.auth.user?.role == 'admin';
  //   },
  // },
};
</script>
