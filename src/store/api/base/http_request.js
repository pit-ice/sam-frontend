import axios from 'axios';
import router from '@/router';

let axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 120000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      config.headers['Authorization'] = 'Bearer ' + user.accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    if (error.response.status === 403) {
      console.log('unauthorized, logging out ...');
      router.replace('/session/login');
    }

    return Promise.reject(error);
  }
);

class HttpRequest {
  constructor() {
    this.axios = axios;
  }

  setHeader(header) {
    axiosInstance.defaults.headers.common[header.key] = header.value;
    axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  get(methodName, data) {
    return axiosInstance.get(methodName, {
      params: data,
    });
  }

  post(methodName, data) {
    return axiosInstance.post(methodName, data);
  }

  put(methodName, data) {
    return axiosInstance.put(methodName, data);
  }

  delete(methodName, id) {
    return axiosInstance.delete(methodName, { params: { id: id } });
  }

  request(type, url, data) {
    let promise = null;
    switch (type) {
      case 'GET':
        promise = axios.get(url, { params: data });
        break;
      case 'POST':
        promise = axios.post(url, data);
        break;
      case 'PUT':
        promise = axios.put(url, data);
        break;
      case 'DELETE':
        promise = axios.delete(url, data);
        break;
      default:
        promise = axios.get(url, { params: data });
        break;
    }
    return promise;
  }
}

export default HttpRequest;