<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/sample">Sample</router-link> |
      <router-link to="/login" v-if="!loggedIn">Login</router-link>
      <router-link to="/logout" v-else>Logout</router-link> | <router-link to="/register">Register</router-link> |
      <router-link to="/faq">Faq</router-link> | <router-link to="/file">File</router-link>
    </div>
    USER Email : {{ userEmail }}
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    userEmail() {
      return this.$store.state.auth.user?.email;
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
