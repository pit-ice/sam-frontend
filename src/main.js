import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';
//

// bootstrap-vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@/assets/scss/main.scss';

// vee-validation
import '@/vee-validate';

import ApiService from '@/store/api/api.service';
ApiService.init();

// product 환경등 mock 미사용시에는 주석처리.
// import MockService from '@/store/api/mock/mock.service';
// MockService.init();

Vue.use(BootstrapVue);

store.dispatch('auth/refresh');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
