var hashColor = require('./index.js');


for (var i = 0; i < 1000; i++) {
  console.log(hashColor.getColorFromString(generateRandomString(), false, true));
}

for (var i = 0; i < 1000; i++) {
  console.log(hashColor.getColorFromNumber(Math.floor((Math.random() * 1000000) + 0)));
}

console.log(hashColor.getColorFromString('Hello world!'));

function generateRandomString() {
  var ret = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 30; i++)
    ret += possible.charAt(Math.floor(Math.random() * possible.length));

  return ret;
}
