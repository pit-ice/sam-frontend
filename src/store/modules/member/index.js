/**
 * Sample Module
 */

import ApiService from '@/store/api/api.service';
import StorageService from '@/store/api/storage.service';
import router from '@/router';

const BASE_URL = '/members/users';
const AUTH_URL = process.env.VUE_APP_AUTH_SERVER_URL;
const state = {
  agreement: [],
  agree: StorageService.getRegister(),
  terms1: false,
  terms2: false,
  terms3: false,
  member: {},
  emailauth: {},
  idStatus: {},
  emailStatus: {},
  isDupId: true,
  isDupEmail: true,
  id: {},
  email: {},
  name: {},
  msg: {},
  status: {},
};

// getters
const getters = {};

// actions
const actions = {
  async getAgree(context) {
    try {
      let response = await ApiService.get('members/agreement');
      context.commit('agreement', response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async secondStep(context, data) {
    context.commit('secondStep', data);
  },

  async idDuplication(context, user) {
    try {
      let response = await ApiService.get('/members/duplicate/id/' + user.id);
      console.log(response.data);
      context.commit('setIdDuplication', response.data);
    } catch (error) {
      context.commit('setIdDuplication', 404);
    }
  },

  async emailDuplication(context, user) {
    try {
      let response = await ApiService.get('/members/duplicate/email/' + user.email);
      context.commit('setEmailDuplication', response.data);
    } catch (error) {
      context.commit('setEmailDuplication', 404);
    }
  },

  async register(context, user) {
    try {
      let body = {
        emailAddr: user.email,
        mbrId: user.id,
        mbrPwd: user.password,
        mbrNm: user.name,
        pwdFailCnt: 0,
        regprId: user.id,
        useYn: 'Y',
      };
      // let params = {
      //   mbrId: user.id,
      //   mbrPwd: user.password,
      //   emailAddr: user.email,
      //   username: user.name,
      //   terms1: state.terms1,
      //   terms2: state.terms2,
      //   terms3: state.terms3,
      // };

      let response = await ApiService.post('/members/users', body);

      context.commit('registerSuccess', response.data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async emailauth(context, auth) {
    try {
      let body = {
        key: auth.key,
        no: auth.mbrNo,
      };
      let response = await ApiService.post(`${AUTH_URL}/email/`, body);
      context.commit('emailauth', response.status);
    } catch (error) {
      context.commit('emailauth', 404);
      console.log(error);
    }
  },
  // 비번 검사
  async verifyPassword(context, password) {
    try {
      let body = {
        mbrId: context.rootState.auth.user.MBR_ID,
        command: 'valid',
        mbrPwd: password,
      };

      let response = await ApiService.post(`${BASE_URL}/me`, body);
      context.commit('verifyPassword', response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  // 비번 변경
  async changePassword(context, user) {
    try {
      let body = {
        mbrId: context.rootState.auth.user.MBR_ID,
        command: 'change',
        mbrPwd: user.password,
        newMbrPwd: user.newPassword,
      };

      let response = await ApiService.post(`${BASE_URL}/me`, body);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

// mutations
const mutations = {
  agreement(state, agreement) {
    state.agreement = agreement;
  },

  secondStep(state, data) {
    state.terms1 = data.terms1;
    state.terms2 = data.terms2;
    state.terms3 = data.terms3;
    StorageService.saveRegister(data);
  },
  registerSuccess(state, body) {
    state.id = body.MBR_ID;
    state.email = body.EMAIL_ADDR;
    state.name = body.MBR_NM;
    StorageService.destoryRegister();
  },
  emailauth(state, status) {
    state.emailauth = status;
  },
  setIdDuplication(state, data) {
    state.idStatus = data.status;
    state.msg = data.msg;

    if (data.status == 404) {
      state.isDupId = false;
    } else {
      state.isDupId = true;
    }
  },
  verifyPassword(state, response) {
    state.msg = response.msg;
    state.status = response.status;

    if (response.status == 200) {
      router.push('/mypage/info');
    }
  },
  setEmailDuplication(state, data) {
    state.emailStatus = data.status;
    state.msg = data.msg;

    if (data.status == 404) {
      state.isDupEmail = false;
    } else {
      state.isDupEmail = true;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
