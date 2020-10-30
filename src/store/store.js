import Vue from 'vue';
import Vuex from 'vuex';

// modules
import auth from './modules/auth';
import sample from './modules/sample';
import faq from './modules/faq';
import file from './modules/file';
import noti from './modules/noti';
import member from './modules/member';
import terms from './modules/terms';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    sample,
    faq,
    file,
    noti,
    member,
    terms,
  },
});
