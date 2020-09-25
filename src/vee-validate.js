import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email, regex, confirmed, max, min } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// Install rules
extend('email', {
  ...email,
  message: '{_field_} 항목의 값은 유효한 이메일 형식이어야 합니다',
});

extend('regex', {
  ...regex,
  message: '{_field_} 항목은 형식에 맞지 않습니다',
});

extend('confirmed', {
  ...confirmed,
  message: '{_field_} 항목의 값이 일치하지 않습니다',
});

extend('max', {
  ...max,
  message: '{_field_} 항목의 값은 최대 {length}글자이어야 합니다',
});

extend('min', {
  ...min,
  message: '{_field_} 항목의 값은 최소 {length}글자이어야 합니다',
});

extend('required', {
  ...required,
  message: '{_field_} 항목은 필수 정보입니다',
});

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match',
});
