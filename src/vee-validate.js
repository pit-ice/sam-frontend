import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// Install rules
extend('email', email);
extend('required', {
  ...required,
  message: 'This field is required',
});
