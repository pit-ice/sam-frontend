
import HttpRequest from './base/http_request'

class SampleService extends HttpRequest {

  
  getSampleData() {
    //return this.get('/sample');
    return require('./sample_data.json')
  }

}

export default SampleService
