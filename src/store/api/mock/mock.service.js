import Vue from 'vue';

var MockAdapter = require('axios-mock-adapter');

const MockService = {
  init() {
    // this sets the mock adapter on the default instance
    var mock = new MockAdapter(Vue.axios, { delayResponse: 200 });

    // mock login request
    mock.onPost('/auth/signin').reply((data) => {
      const users = require('./data/user.json');
      const credential = JSON.parse(data.data);
      const found = users.find((user) => {
        return credential.username === user.username && credential.password === user.password;
      });
      if (found) {
        return [200, found];
      }
      return [401, { errors: ['The login detail is incorrect'] }];
    });

    // mock to verify authentication
    mock.onGet(/\/verify\/?/).reply((data) => {
      const users = require('./data/user.json');
      const token = data.headers.Authorization;
      if (token !== 'undefined') {
        const found = users.find((user) => {
          return token === user.token;
        });
        return [200, found];
      }
      return [401, { errors: ['Invalid authentication'] }];
    });

    mock.onGet(/\/sample\/?/).reply((data) => {
      const users = require('./data/user.json');
      const token = data.headers.Authorization;

      const found = users.find((user) => {
        return token === user.token;
      });

      if (found) {
        return [200, require('./data/sample.json')];
      }
      return [401, { errors: ['The login detail is incorrect'] }];
    });

    mock.onGet('/techsupport/bbs').reply((data) => {
      const users = require('./data/user.json');
      const token = data.headers.Authorization;

      const found = users.find((user) => {
        return token === user.token;
      });

      if (found) {
        return [200, require('./data/bbs.json')];
      }
      return [401, { errors: ['The login detail is incorrect'] }];
    });
  },
};

export default MockService;
