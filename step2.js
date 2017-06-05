function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var output = "";

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      output += data;
      console.log(output);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

  return output;

}

getAndPrintHTML();
