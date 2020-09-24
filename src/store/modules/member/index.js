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
  status: {},
};

// getters
const getters = {};

// actions
const actions = {
  async getAgree(context) {
    try {
      let response = await ApiService.get('member/agreement');
      console.log(response.data);
      context.commit('agreement', response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async secondStep(context, data) {
    context.commit('secondStep', data);
  },

  async duplication(context, user) {
    try {
      let response = await ApiService.get('/users/temp/' + user.id);
      context.commit('setDuplication', response.status);
    } catch (error) {
      console.log(error);
      context.commit('setDuplication', 404);
    }
  },

  async register(context, user) {
    try {
      let params = {
        mbrId: user.id,
        mbrPwd: user.password,
        emailAddr: user.email,
        username: user.name,
        terms1: state.terms1,
        terms2: state.terms2,
        terms3: state.terms3,
      };

      // let params = {
      //   compClsCd: 'string',
      //   compNo: 'string',
      //   compUserClsCd: 'string',
      //   deptNm: 'string',
      //   emailAddr: 'string',
      //   empDbCfrmYn: 'string',
      //   mbrClsCd: 'string',
      //   mbrFailCnt: 0,
      //   mbrId: user.id,
      //   mbrNo: 0,
      //   mbrPwd: 'string',
      //   mngprYn: 'string',
      //   pstnNm: 'string',
      //   redDtm: '2020-09-24T01:04:12.293Z',
      //   regprId: 'string',
      //   updDtm: '2020-09-24T01:04:12.293Z',
      //   updrpId: 'string',
      //   useYn: 'string',
      // };

      let response = await ApiService.post('/users/', params, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      context.commit('registerSuccess', response.data);
    } catch (error) {
      //ontext.commit('registerFailure', error);
      console.log(error);
    }
  },
  memberdetail(context) {
    let id = 'banha1004';

    ApiService.get('/users/temp/' + id)
      .then(({ data }) => {
        context.commit('memberdetail', data);
      })
      .catch((error) => {
        console.log(error);
      });
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

  register(state) {
    state.terms1 = state.agree.terms1;
  },
  memberdetail(state, list) {
    state.member = list;
  },
  emailauth(state, emailauth) {
    state.emailauth = emailauth;
  },
  setDuplication(state, status) {
    state.status = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};