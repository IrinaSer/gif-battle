const http = require('http');
http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.writeHead(200, {'Content-type': 'application/json'});
  switch (req.url) {
    case '/':
      if (req.method === 'GET') {
        res.end('hello i am your new api!');
      } else if (req.method === 'POST') {
        res.end('creating');
      }
    case '/random':
      res.end('getting a random');
    case '/versus':
      res.end('getting versus');
    case '/vote':
      if (req.method === 'POST') {
        res.end('voting');
      }
    default:
      res.writeHead(404, {'Content-type': 'application/json'});
      res.end('404');
  }



}).listen(3000, () => console.log('Server works!'));
