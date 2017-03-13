function getAndPrintHTML (options) {

  var https = require('https');

  var space = [];

  https.get(options, function (response) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);