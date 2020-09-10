import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from '@/router';
import StorageService from './storage.service';

/**
 * Service to call HTTP request via Axios
 */
const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;
    Vue.axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const status = error.response ? error.response.status : null;

        if (status === 401) {
          console.log('unauthorized, logging out ...');
          router.replace({
            path: '/auth/login',
            query: { redirect: router.currentRoute.fullPath },
          });
        }

        return Promise.reject(error);
      }
    );

    this.setHeader();
  },

  /**
   * Set the default HTTP request headers
   */
  setHeader() {
    if (StorageService.getToken()) {
      Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${StorageService.getToken()}`;
    }
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch((error) => {
      // console.log(error);
      throw new Error(`[VRD] ApiService ${error}`);
    });
  },

  /**
   * Send the GET HTTP request
   * @param resource
   * @returns {*}
   */
  get(resource) {
    return Vue.axios.get(resource).catch((error) => {
      // console.log(error);
      throw new Error(`[VRD] ApiService ${error}`);
    });
  },

  /**
   * Set the POST HTTP request
   * @param resource
   * @param params
   * @returns {*}
   */
  post(resource, params, config = {}) {
    return Vue.axios.post(`${resource}`, params, config);
  },

  /**
   * Send the UPDATE HTTP request
   * @param resource
   * @param slug
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  /**
   * Send the PUT HTTP request
   * @param resource
   * @param params
   * @returns {IDBRequest<IDBValidKey> | Promise<void>}
   */
  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  /**
   * Send the DELETE HTTP request
   * @param resource
   * @returns {*}
   */
  delete(resource) {
    return Vue.axios.delete(resource).catch((error) => {
      // console.log(error);
      throw new Error(`[VRD] ApiService ${error}`);
    });
  },
};

export default ApiService;
