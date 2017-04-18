module.exports = function getHTML (options, callback) {

  var https = require('https');

  var output = "";

  https.get(options, function (response) {

      response.setEncoding('utf8');

      response.on('data', function (data) {
        console.log("received data...");
        output += data;
        callback(output);
      });

      response.on('end', function() {
        console.log("response complete...");
      });

  });

};
