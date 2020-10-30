/**
 * Sample Module
 */

import ApiService from '@/store/api/api.service';

const BASE_URL = '/members';
const state = {
  agreement: {},
};

// getters
const getters = {};

// actions
const actions = {
  //약관 리스트
  async terms(context, type) {
    try {
      let response = await ApiService.get(`${BASE_URL}/terms/` + type);
      console.log(response.data);
      context.commit('agreement', response.data.data);
    } catch (error) {
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  agreement(state, agreement) {
    state.agreement = agreement;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
