/**
 * Auth Module
 */

import ApiService from '@/store/api/api.service';
import JwtService from '@/store/api/jwt.service';

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
};

// getters
const getters = {};

// actions
const actions = {
  async login(context, user) {
    try {
      let params = {
        username: user.email,
        password: user.password,
      };
      let response = await ApiService.post('/auth/signin', params);

      context.commit('loginSuccess', response.data);
    } catch (error) {
      context.commit('loginFailure', error);
      console.log(error);
    }
  },
  async logout(context) {
    try {
      context.commit('logout');
    } catch (error) {
      console.log(error);
    }
  },
  async register(context, user) {
    try {
      let params = {
        username: user.username,
        password: user.password,
        email: user.email,
      };
      await ApiService.post('/auth/signup', params);

      //context.commit('registerSuccess', response.data);
    } catch (error) {
      //ontext.commit('registerFailure', error);
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  loginSuccess(state, user) {
    if (user.accessToken) {
      state.isAuthenticated = true;
      state.user = user;
      JwtService.saveToken(state.user.accessToken);
    }
  },
  loginFailure(state) {
    state.status.isAuthenticated = false;
    state.user = null;
  },
  logout(state) {
    state.isAuthenticated = false;
    state.user = null;
    JwtService.destroyToken();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
