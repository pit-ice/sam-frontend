import HttpRequest from './base/http_request';

class AuthService extends HttpRequest {
  login(user) {
    return this.post('/auth/signin', user);
  }

  register(user) {
    return this.post('/auth/signup', user);
  }
}

export default AuthService;
