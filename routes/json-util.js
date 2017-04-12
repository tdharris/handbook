var fs = require('fs');

module.exports.loadJson = function (file, callback) {
  fs.readFile(file, { encoding: 'utf8' }, function (err, data) {
    if (err) return callback(err); // file reading error
    try {
      // parse and return json to callback
      var json = JSON.parse(data);
      callback(null, json);
    } catch (ex) {
      // catch JSON parsing errors so your app doesn't crash
      callback(ex);
    }
  });
};

module.exports.writeJson = function (file, json, callback) {
  fs.writeFile(file, JSON.stringify(json, null, 4), callback);
};