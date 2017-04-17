function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var space = "";

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      space += data;
      console.log(space);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

  return space;

}

getAndPrintHTML();
