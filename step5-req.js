module.exports = function getHTML (options, callback) {

var https = require('https');

https.get(options, function (response) {

    var space = [];

    response.setEncoding('utf8');

    response.on('data', function (data) {
      space.push(data);
    });

    response.on('end', function() {
      callback(space.join(""));
    });

  });

};