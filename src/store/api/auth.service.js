
import HttpRequest from './base/http_request'

class AuthService extends HttpRequest {
  signin (user) {
    return this.post('/auth/signin', user)
  }
  
  signup (user) {
    return this.post('/auth/signup', user)
  }
}

export default AuthService
