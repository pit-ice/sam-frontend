<template>
  <div class="signup-form">
    <ValidationObserver ref="form" v-slot="{ invalid }">
      <form name="form" @submit.prevent="onSubmit">
        <h2>Login</h2>
        <p class="hint-text"></p>
        <div class="form-group">
          <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
            <input class="form-control" v-model="email" type="email" placeholder="Email" />
            <span v-if="errors[0]" class="alert alert-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
            <input class="form-control" v-model="password" type="password" placeholder="Password" />
            <span v-if="errors[0]" class="alert alert-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="invalid" type="submit">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            <span>Login</span>
          </button>
        </div>
      </form>
      <div class="text-center">Create an Account <router-link to="/auth/register">Sign up</router-link></div>
    </ValidationObserver>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      message: '',
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }

        this.$store.dispatch('auth/login', { email: this.email, password: this.password }).then(
          () => {
            this.$router.push('/support/faq');
          },
          (error) => {
            alert(error.message);
          }
        );

        this.email = this.password = '';
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>
