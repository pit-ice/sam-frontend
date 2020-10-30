/**
 * Sample Module
 */

import ApiService from '@/store/api/api.service';
import StorageService from '@/store/api/storage.service';
import router from '@/router';

const BASE_URL = '/members';
const AUTH_URL = process.env.VUE_APP_AUTH_SERVER_URL;
const state = {
  agreement: [],
  terms: {},
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
  info: {},
};

// getters
const getters = {};

// actions
const actions = {
  //약관 리스트
  async getAgree(context) {
    try {
      let response = await ApiService.get(`${BASE_URL}/agreement`);
      context.commit('agreement', response.data);
    } catch (error) {
      console.log(error);
    }
  },

  //동의 약관 저장
  async secondStep(context, data) {
    context.commit('secondStep', data);
  },

  //아이디 중복
  async idDuplication(context, user) {
    try {
      let response = await ApiService.get(`${BASE_URL}/duplicate/id/` + user.id);
      context.commit('setIdDuplication', response.data);
    } catch (error) {
      context.commit('setIdDuplication', 404);
    }
  },

  //이메일 중복
  async emailDuplication(context, user) {
    try {
      let response = await ApiService.get(`${BASE_URL}/duplicate/email/` + user.email);
      context.commit('setEmailDuplication', response.data);
    } catch (error) {
      context.commit('setEmailDuplication', 404);
    }
  },

  //임시 회원등록
  async register(context, user) {
    const agree = JSON.parse(StorageService.getRegister());

    try {
      let body = {
        emailAddr: user.email,
        mbrId: user.id,
        mbrPwd: user.password,
        mbrNm: user.name,
        pwdFailCnt: 0,
        regprId: user.id,
        useYn: true,
        terms: agree,
        r: user.r,
      };
      let response = await ApiService.post(`${BASE_URL}/users`, body);

      context.commit('registerSuccess', response.data.data);
    } catch (error) {
      console.log(error);
    }
  },

  //이메일 인증
  async emailauth(context, auth) {
    try {
      let body = {
        key: auth.key,
        memberId: auth.memberId,
      };
      let response = await ApiService.post(`${AUTH_URL}/email/`, body);
      context.commit('emailauth', response.status);
    } catch (error) {
      context.commit('emailauth', 404);
      console.log(error);
    }
  },
  // 비번 검사
  async verifyPassword(context, user) {
    try {
      let body = {
        mbrId: context.rootState.auth.user.member_id,
        mbrPwd: user.password,
        r: user.r,
      };
      console.log(body);
      let response = await ApiService.post(`${BASE_URL}/password`, body);
      context.commit('verifyPassword', response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  // 비번 변경
  async changePassword(context, user) {
    try {
      let body = {
        mbrId: context.rootState.auth.user.member_id,
        mbrPwd: user.password,
        newMbrPwd: user.newPassword,
        memberId: user.memberId,
        key: user.key,
        type: user.type,
      };

      let response = await ApiService.put(`${BASE_URL}/password`, body);
      context.commit('changePassword', response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  // 회원 정보
  async infoSearch(context) {
    try {
      let response = await ApiService.get(`${BASE_URL}`);
      context.commit('infoSearch', response.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  // 비로그인시 비번 변경
  async resetPassword(context, user) {
    try {
      let body = {
        memberId: user.memberId,
        command: 'reset',
        memberPassword: user.password,
        key: user.key,
      };

      let response = await ApiService.put(`${BASE_URL}/password/reset`, body);
      state.status = response.data.status;
      state.msg = response.data.msg;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async loginErrorEmailCheck(context, user) {
    try {
      let body = {
        memberId: user.memberId,
        memberName: user.name,
        emailAddress: user.email,
      };
      let response = await ApiService.post(`${BASE_URL}/me`, body);
      state.status = response.data.status;
      state.msg = response.data.msg;
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
    state.terms = data;
    StorageService.saveRegister(data);
  },
  registerSuccess(state, body) {
    state.id = body.member_id;
    state.email = body.email_address;
    state.name = body.member_name;
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
  changePassword(state, response) {
    state.msg = response.msg;
    state.status = response.status;
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
  infoSearch(state, response) {
    state.info = response.data;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
