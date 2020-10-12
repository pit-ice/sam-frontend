/**
 * Auth Module
 */

import ApiService from '@/store/api/api.service';
import StorageService from '@/store/api/storage.service';
import NotificationService from '@/store/api/noti.service';
import router from '@/router';
const AUTH_URL = process.env.VUE_APP_AUTH_SERVER_URL;

const state = {
  msg: {},
  status: {},
  errors: null,
  user: StorageService.getUser(),
  isAuthenticated: !!StorageService.getToken(),
};

// getters
const getters = {};

// actions
const actions = {
  async login(context, user) {
    try {
      let params = {
        mbrId: user.userid,
        mbrPwd: user.password,
      };
      let response = await ApiService.post(`${AUTH_URL}/auth/login`, params);
      console.log(response);
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
  refresh(context) {
    context.commit('initAuthAndNotification');
  },
};

// mutations
const mutations = {
  loginSuccess(state, response) {
    if (response.token) {
      state.isAuthenticated = true;
      state.user = response.data;
      StorageService.saveToken(response.token);
      StorageService.saveUser(state.user);
      ApiService.setHeader();
      NotificationService.connect(state.user.username);
      state.msg = response.msg;
      state.status = response.status;
      router.push('/');
    } else {
      state.msg = response.msg;
      state.status = response.status;
    }
  },
  initAuthAndNotification(state) {
    if (StorageService.getToken()) {
      ApiService.setHeader();
      NotificationService.connect(state.user.username);
    }
  },
  loginFailure(state) {
    state.status.isAuthenticated = false;
    state.user = null;
  },
  logout(state) {
    state.isAuthenticated = false;
    state.user = null;
    StorageService.destroy();

    router.push('/');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
