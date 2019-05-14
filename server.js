const http = require('http');
const parseBody = require('./helpers/parse');
const giphy = require('./data/giphy.js');

function handleErrror(error, res) {
  res.writeHead(500, {'Content-type': 'text/plain'});
  res.end(error.message);
}

http.createServer((req, res) => {
  const HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Request-Headers': 'X-Requested-With, Content-Type, Accept',
    'Access-Control-Max-Age': '60',
    'Content-type': 'application/json; charset=utf-8'
  }

  res.writeHead(200, HEADERS);

  switch (req.url) {
    case '/':
      if (req.method === 'GET') {
        res.end('hello i am your new api!');
      }
      if (req.method === 'POST') {
        //
        res.end('POST ');
      }
      break;

    case '/random':
      const apiKey = '3VNNco8hjxksb4zlL4vMfu12uE5VhLK1';
      const url = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

      giphy.getRandomGif(url, (error, gif) => {
        if (error) {
          console.error(error);
          return false;
        }
        res.end(JSON.stringify(gif));
      });

      break;

    case '/versus':
      res.end('getting versus');
      break;

    case '/create':
      let body = '';
      req.setEncoding('utf-8');
      req.on('data', data => body += data);
      req.on('end', () => {
        console.log(body);

        // res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
        // res.end('creating' + JSON.stringify(data));
      });
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
