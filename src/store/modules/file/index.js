/**
 * Auth Module
 */

import ApiService from '@/store/api/api.service';

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
      await ApiService.post('/sample/file', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

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
