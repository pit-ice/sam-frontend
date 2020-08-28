/**
 * Auth Module
 */

import { authService } from '@/store/api';

const user = localStorage.getItem('user');
const initialState = user ? { status: { loggedIn: true }, user: JSON.parse(user) } : { status: { loggedIn: false }, user: null };

const state = initialState;

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
      let response = await authService.login(params);

      context.commit('loginSuccess', response.data);
    } catch (error) {
      context.commit('loginFailure', error);
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
      await authService.register(params);

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
    state.status.loggedIn = true;
    state.user = user;

    if (user.accessToken) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  },
  loginFailure(state) {
    state.status.loggedIn = false;
    state.user = null;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
