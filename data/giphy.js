const http = require('http');

function getRandomGif(url, done) {
  const req = http.get(url, res => {

    if (res.statusCode !== 200) {
      done(new Error(`Ошибка giphy(200) ${res.statusMessage}`));
      res.resume();
      return;
    }

    res.setEncoding('utf-8');

    let body = '';

    res.on('data', data => body += data);

    res.on('end', () => {
      let result;

      try {
        body = JSON.parse(body);

        result = {
          id: body.data.id,
          url: body.data.image_original_url,
        }
      } catch (error) {
        done(error);
      }

      if (result.Response === 'False') return done(new Error('Gif no found'));

      done(null, result);
    });
  });

  req.on('error', error => done(error));
}

module.exports = {
  getRandomGif
};
