const http = require('http');
const PORT = process.env.PORT || 5000;

function createRandomNamedEvents(request, response) {
  response.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
  });

  let eventsSent = 1;

  const interval = setInterval(() => {
    // if (eventsSent === 31) {
    //   clearInterval(interval);
    //   console.log('Sent 30 events, stopping.');
    //   response.write('id: -1\ndata:\n\n\n');
    //   response.end();
    //   return;
    // }
    console.log(`${eventsSent} Sending test notification message.`);

    response.write(`id: ${eventsSent}\n`);
    let data = '테스트 시험이 완료되었습니다.';
    response.write(`event: test_noti\ndata:${data}\n\n\n`);

    eventsSent += 1;
  }, 3000);

  request.on('close', () => {
    clearInterval(interval);
    response.end();
    console.log('Stopped sending events as client closed the connection.');
  });
}

http
  .createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');

    if (request.method === 'OPTIONS') {
      response.writeHead(200);
      response.end();
      return;
    }

    switch (request.url) {
      case '/noti':
        createRandomNamedEvents(request, response);
        break;
      default:
        // Unknown URL
        response.writeHead(404);
        response.end();
    }
  })
  .listen(PORT);

console.log(`server-sent-events-demo server running on port ${PORT}`);
