/**
 * Auth Module
 */

import ApiService from '@/store/api/api.service';

const state = {
  formdata: [],
  progressRate: 0,
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
        onUploadProgress: function (progressEvent) {
          context.commit('SET_UPLOAD_PROGRESS', parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100)));
        },
      });

      //context.commit('registerSuccess', response.data);
    } catch (error) {
      //ontext.commit('registerFailure', error);
      console.log(error);
    }
  },

  async down() {
    try {
      // let params = {
      //   name: formdata.name,
      //   size: formdata.size,
      //   attcFileData1: formdata,
      // };
      await ApiService.get('/sample/filedown', {
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

  async excel(context, formdata) {
    try {
      await ApiService.post('/sample/excel', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: function (progressEvent) {
          context.commit('SET_UPLOAD_PROGRESS', parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100)));
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
const mutations = {
  SET_UPLOAD_PROGRESS(state, progressRate) {
    state.progressRate = progressRate;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
