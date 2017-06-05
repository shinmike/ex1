// 1. getHTML function defined. Includes parameters 'options' and 'callback'
function getHTML (options, callback) {

  var https = require('https');

  var output = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      output += data;
      callback(output);
    });

    response.on('end', function() {
      console.log("Response stream complete!");
    });

  });

  return output;

}

// this is the 'options' parameter
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// this is the 'callback' (function) parameter
function printHTML (html) {
  console.log(html);
}

// 2. Calls getHTML function, passing in requestOptions (options) and printHTML (callback)
getHTML(requestOptions, printHTML);
