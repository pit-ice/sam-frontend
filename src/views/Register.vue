<template>
  <div class="signup-form">
    <ValidationObserver ref="form" v-slot="{ invalid }">
      <form name="form" @submit.prevent="onSubmit">
        <h2>Register</h2>
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
          <ValidationProvider name="ConfirmPassword" rules="required" v-slot="{ errors }">
            <input class="form-control" v-model="confirmPassword" type="password" placeholder="Confirm Password" />
            <span v-if="errors[0]" class="alert alert-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg btn-block" :disabled="invalid">Register Now</button>
        </div>
      </form>
      <div class="text-center">Already have an account? <router-link to="/users">Sign in</router-link></div>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }

        let registerUser = { username: this.email, email: this.email, password: this.password };
        this.$store.dispatch('auth/register', registerUser).then(
          () => {
            this.$router.push('/login');
          },
          (error) => {
            alert(error.message);
          }
        );

        this.email = this.password = this.confirmPassword = '';
        this.$nextTick(() => {
          this.$refs.form.reset();
        });
      });
    },
  },
};
</script>
