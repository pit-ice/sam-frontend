/**
 * Notification Module
 */

import axios from 'axios';

const state = {
  newNotiCount: 0,
  notifications: [],
};

// getters
const getters = {};

// actions
const actions = {
  async setNotification(context, data) {
    context.commit('setNotification', data);
  },
  async setNotificationWS(context, data) {
    context.commit('setNotificationWS', data);
  },
  async resetNewNotiCount(context) {
    context.commit('resetNewNotiCount');
  },
  async publishTestEvent(context, data) {
    try {
      let response = await axios.post(`${process.env.VUE_APP_PUSH_SERVER_URL}pub`, data);
      //context.commit('getSampleData', response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  setNotification(state, data) {
    state.newNotiCount += 1;
    state.notifications.push(data);
  },
  setNotificationWS(state, data) {
    state.newNotiCount += 1;
    state.notifications.push(data);
  },
  resetNewNotiCount(state) {
    state.newNotiCount = 0;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
