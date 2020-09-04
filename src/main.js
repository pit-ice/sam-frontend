import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store/store';

// bootstrap-vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@/assets/scss/main.scss';

// vee-validation
import '@/vee-validate';

import ApiService from '@/store/api/api.service';
ApiService.init();
import MockService from '@/store/api/mock/mock.service';
MockService.init();

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
