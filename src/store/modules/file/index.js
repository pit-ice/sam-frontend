/**
 * Auth Module
 */

import { fileService } from '@/store/api';

const state = {
  formdata: [],
};

// getters
const getters = {};

// actions
const actions = {
  async upload(context, formdata) {
    try {
      // let params = {
      //   name: formdata.name,
      //   size: formdata.size,
      //   attcFileData1: formdata,
      // };
      await fileService.upload(formdata);

      //context.commit('registerSuccess', response.data);
    } catch (error) {
      //ontext.commit('registerFailure', error);
      console.log(error);
    }
  },
};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
