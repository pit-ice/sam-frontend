import Vue from 'vue';
import Vuex from 'vuex';

// modules
import auth from './modules/auth';
import sample from './modules/sample';
import faq from './modules/faq';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    sample,
    faq,
  },
});
