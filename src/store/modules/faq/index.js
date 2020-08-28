/**
 * Sample Module
 */

import { faqService } from '../../api';

const state = {
  faqs: [],
};

// getters
const getters = {};

// actions
const actions = {
  async getFaqData(context) {
    try {
      let response = await faqService.getFaqData();
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
