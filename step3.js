function getAndPrintHTML(options) {

  var https = require('https');

  var output = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      output += data;
      console.log(output);
    });

    response.on('end', function() {
    });

  });

  return output;
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
