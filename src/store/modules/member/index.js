/**
 * Sample Module
 */

import ApiService from '@/store/api/api.service';
import StorageService from '@/store/api/storage.service';

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
};

// getters
const getters = {};

// actions
const actions = {
  async getAgree(context) {
    try {
      let response = await ApiService.get('member/agreement');
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
      let response = await ApiService.get('/member/users?checkType=id&id=' + user.id);
      context.commit('setIdDuplication', response.status);
    } catch (error) {
      context.commit('setIdDuplication', 404);
    }
  },

  async emailDuplication(context, user) {
    try {
      let response = await ApiService.get('/member/users?checkType=email&id=' + user.email);
      context.commit('setEmailDuplication', response.status);
    } catch (error) {
      context.commit('setEmailDuplication', 404);
    }
  },

  async register(context, user) {
    let body = {
      compClsCd: 'BBBB',
      compNo: 0,
      compUserClsCd: 'AAAA',
      deptNm: 'string',
      disable: 0,
      emailAddr: user.email,
      empDbCfrmYn: 'Y',
      mbrClsCd: '0000',
      mbrId: user.id,
      mbrPwd: user.password,
      mbrNm: user.name,
      mngprYn: 'Y',
      pstnNm: 'string',
      pwdFailCnt: 0,
      regprId: user.id,
      useYn: 'Y',
    };
    try {
      // let params = {
      //   mbrId: user.id,
      //   mbrPwd: user.password,
      //   emailAddr: user.email,
      //   username: user.name,
      //   terms1: state.terms1,
      //   terms2: state.terms2,
      //   terms3: state.terms3,
      // };

      let response = await ApiService.post('/member/users/', body);

      context.commit('registerSuccess', response.data);
    } catch (error) {
      context.commit('registerSuccess', user);
      console.log(error);
    }
  },
  async emailauth(context) {
    try {
      let response = await ApiService.get('/member/emailauth');
      context.commit('emailauth', response.status);
    } catch (error) {
      //ontext.commit('registerFailure', error);
      console.log(error);
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
    state.id = body.mbrId;
    state.email = body.emailAddr;
    state.name = body.mbrNm;
  },
  emailauth(state, emailauth) {
    state.emailauth = emailauth;
  },
  setIdDuplication(state, status) {
    state.idStatus = status;

    if (status == 404) {
      state.isDupId = false;
    } else {
      state.isDupId = true;
    }
  },
  setEmailDuplication(state, status) {
    state.emailStatus = status;

    if (status == 404) {
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
