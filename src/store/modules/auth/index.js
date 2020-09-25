/**
 * Auth Module
 */

import ApiService from '@/store/api/api.service';
import StorageService from '@/store/api/storage.service';
import NotificationService from '@/store/api/noti.service';
import router from '@/router';

const state = {
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
        username: user.userid,
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
  refresh(context) {
    context.commit('initAuthAndNotification');
  },
  async verifyPassword(context, password) {
    try {
      let params = {
        password: password,
      };
      let response = await ApiService.post('/auth/verify_pwd', params);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
  async changePassword(context, payload) {
    try {
      let params = {
        password: payload.password,
        newPassword: payload.newPassword,
      };
      let response = await ApiService.post('/auth/change_pwd', params);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

// mutations
const mutations = {
  loginSuccess(state, user) {
    if (user.accessToken) {
      state.isAuthenticated = true;
      state.user = user;
      StorageService.saveToken(state.user.accessToken);
      StorageService.saveUser(state.user);
      ApiService.setHeader();
      NotificationService.connect(state.user.username);

      router.push('/');
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
