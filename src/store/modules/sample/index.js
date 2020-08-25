/**
 * Sample Module
 */

import { sampleService } from "../../api";

const state = {
  samples: []
};

// getters
const getters = {};

// actions
const actions = {
  async getSampleData(context) {
    try {
      let samples = await sampleService.getSampleData();
      context.commit("getSampleData", samples);
    } catch (error) {
      console.log(error)
    }
  }
};

// mutations
const mutations = {
  getSampleData(state, samples) {
    state.samples = samples;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
