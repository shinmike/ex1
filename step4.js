var https = require('https');

function getHTML (options, callback) {

  var space = [];

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      space.push(data);
    });

    response.on('end', function() {
      callback(space.join(""));
    });

}); return getHTML;

};

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);