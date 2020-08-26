import HttpRequest from './base/http_request';

class SampleService extends HttpRequest {
  getSampleData() {
    //return this.get('/sample');

    let data = require('./sample_data.json');

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
}

export default SampleService;
