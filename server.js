const http = require('http');
const gif = require('./lib/giphy.js');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'application/json'});

  switch (req.url) {
    case '/':
      if (req.method === 'GET') {
        res.end('hello i am your new api!');
      } else if (req.method === 'POST') {
        res.end('creating');
      }
      break;
    case '/random':
      const url = 'http://api.giphy.com/v1/gifs/random?api_key=3VNNco8hjxksb4zlL4vMfu12uE5VhLK1';
      gif.get(url, (error, gif) => {
        if (error) throw error;

        console.log(gif);
      });
      res.end('getting a random');
      break;
    case '/versus':
      res.end('getting versus');
      break;
    case '/vote':
      if (req.method === 'POST') {
        res.end('voting');
      }
      break;
    default:
      res.writeHead(404, {'Content-type': 'application/json'});
      res.end('404 not found');
  }

}).listen(3000, () => console.log('Server works!'));
