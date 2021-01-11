const http = require('http');

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.end('OK');
});

server.on('connection', (socket) => console.log(socket));

server.on('error', (err) => console.log(err));

server.on('close', () => console.log('Close'));

server.listen(3000);
