// 1. getHTML function defined. Includes parameters 'options' and 'callback'
function getHTML (options, callback) {

  var https = require('https');

  var space = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      space += data;
      // printHTML function called and space string is the parameter 'html'
      // and console.logs this
      callback(space);
    });

    response.on('end', function() {
      console.log("Response stream complete!");
    });

  });

}

// this is the 'options'
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// this is the 'callback' function
function printHTML (html) {
  console.log(html);
}

// 2. Calls getHTML function, passing in requestOptions (options) and printHTML (callback)
getHTML(requestOptions, printHTML);
