var hashColor = require('./index.js');

/*
  Test strings
*/
for (var i = 0; i < 3000; i++) {
  console.log(hashColor.getColorFromString(generateRandomString()));
}

/*
  Test numbers
*/
for (var i = 0; i < 3000; i++) {
  console.log(hashColor.getColorFromNumber(Math.floor((Math.random() * 1000000) + 0)));
}

function generateRandomString() {
  var ret = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 30; i++)
    ret += possible.charAt(Math.floor(Math.random() * possible.length));

  return ret;
}
