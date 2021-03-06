/**
 * Sample Module
 */

import ApiService from '@/store/api/api.service';

const state = {
  faqs: [],
};

// getters
const getters = {};

// actions
const actions = {
  async getFaqData(context) {
    try {
      let response = await ApiService.get('/techsupport/bbs');
      context.commit('getFaqData', response.data);
    } catch (error) {
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  getFaqData(state, faqs) {
    state.faqs = faqs;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
