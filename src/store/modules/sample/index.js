/**
 * Sample Module
 */

import ApiService from '@/store/api/api.service';

const state = {
  samples: [],
};

// getters
const getters = {};

// actions
const actions = {
  async getSampleData(context) {
    try {
      let response = await ApiService.get('/sample');
      context.commit('getSampleData', response.data);
    } catch (error) {
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  getSampleData(state, samples) {
    state.samples = samples;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
