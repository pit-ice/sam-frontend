import Vue from 'vue';

var MockAdapter = require('axios-mock-adapter');

let users = require('./data/user.json');

const MockService = {
  init() {
    // this sets the mock adapter on the default instance
    var mock = new MockAdapter(Vue.axios, { delayResponse: 200 });

    // mock login request
    mock.onPost('/auth/signin').reply((data) => {
      const credential = JSON.parse(data.data);
      const found = users.find((user) => {
        return credential.username === user.username && credential.password === user.password;
      });
      if (found) {
        return [200, found];
      }
      return [401, { errors: ['The login detail is incorrect'] }];
    });

    mock.onPost('/auth/verify_pwd').reply((data) => {
      const token = data.headers.Authorization.replace('Bearer ', '');
      const body = JSON.parse(data.data);

      console.log(body);

      const found = users.find((user) => {
        return token === user.accessToken && body.password === user.password;
      });
      if (found) {
        return [200, found];
      }
      return [400, { errors: ['not found user'] }];
    });

    mock.onPost('/auth/change_pwd').reply((data) => {
      const token = data.headers.Authorization.replace('Bearer ', '');
      const body = JSON.parse(data.data);

      console.log(body);

      const found = users.find((user) => {
        return token === user.accessToken && body.password === user.password;
      });
      if (found) {
        found.password = body.newPassword;

        return [200, found];
      }
      return [400, { errors: ['not found user'] }];
    });

    mock.onGet(/\/sample\/?/).reply((data) => {
      const token = data.headers.Authorization.replace('Bearer ', '');

      const found = users.find((user) => {
        return token === user.accessToken;
      });

      if (found) {
        return [200, require('./data/sample.json')];
      }
      return [401, { errors: ['The login detail is incorrect'] }];
    });

    mock.onGet('/techsupport/bbs').reply((data) => {
      const token = data.headers.Authorization.replace('Bearer ', '');

      const found = users.find((user) => {
        return token === user.accessToken;
      });

      if (found) {
        return [200, require('./data/bbs.json')];
      }
      return [401, { errors: ['The login detail is incorrect'] }];
    });

    mock.onGet('/member/agreement').reply(() => {
      return [200, require('./data/agreement.json')];
    });

    mock.onPost('/member/signin').reply((data) => {
      return [200, data];
    });

    mock.onGet('/member/emailauth').reply((data) => {
      console.log(data);
      return [200, data];
    });
    mock.onGet('/member/detail').reply(() => {
      return [200, require('./data/memberdetail.json')];
    });
    mock.onGet('/auth/duplication').reply((data) => {
      const users = require('./data/user.json');
      console.log(11111);
      console.log(data);
      const credential = JSON.parse(data.data);
      const found = users.find((user) => {
        return credential.username === user.username;
      });
      if (found) {
        return [200, found];
      }
      return [201, { errors: ['The login detail is incorrect'] }];
    });
  },
};

export default MockService;
