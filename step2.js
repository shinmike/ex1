function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require('https');

  var space = [];

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      space.push(data);
      console.log(space.join(""));
// console.log can be done here or end
    });

    response.on('end', function() {
// console.log(space.join(""))
    });

}); return getAndPrintHTML;

};

getAndPrintHTML();