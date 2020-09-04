import HttpRequest from './base/http_request';

class FileService extends HttpRequest {
  upload(formData) {
    // this.setHeader('Content-Type', 'multipart/form-data');
    // return this.post('/sample/file', formData);

    console.log(formData);
    return this.post('/sample/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export default FileService;
