<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/sample" v-if="isAdmin">Sample</router-link> |
      <router-link to="/auth/login" v-if="!loggedIn">Login</router-link>
      <router-link to="/auth/logout" v-else>Logout</router-link> | <router-link to="/auth/register">Register</router-link> |
      <router-link to="/support/faq">Faq</router-link> | <router-link to="/file">File</router-link>
      <notification v-if="loggedIn"></notification>
    </div>

    <router-view />
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue';

export default {
  name: 'App',
  components: {
    Notification,
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.isAuthenticated;
    },
    userEmail() {
      return this.$store.state.auth.user?.email;
    },
    isAdmin() {
      return this.$store.state.auth.user?.role == 'admin';
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.about {
  h1 {
    font-size: 130px;
  }
}
</style>
