import HttpRequest from './base/http_request';

class FaqService extends HttpRequest {
  getFaqData() {
    return this.get('/techsupport/bbs');
    //   return require('./sample_data.json');
  }
}

export default FaqService;