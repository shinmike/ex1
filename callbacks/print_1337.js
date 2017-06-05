var getHTML = require('../step5-req.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337(html) {
  var output = "";
  for (var i = 0; i < html.length; i++){
    if (html[i] === "a"){
      output += "4";
    }
    else if (html[i] === "e"){
      output += '3';
    }
    else if (html[i] === "o"){
      output += '0';
    }
    else if (html[i] === "l"){
      output += '1';
    }
    else if (html[i] === "s"){
      output += '5';
    }
    else if (html[i] === "t"){
      output += '7';
    }
    else if (html[i] === "ck"){
      output += 'x';
    }
    else if (html[i] === "er"){
      output += '0r';
    }
    else if (html[i] === "you"){
      output += 'j00';
    }
    else {
      output += html[i];
    }
  }
  console.log(output);
  return output;
}

getHTML(requestOptions, print1337);
