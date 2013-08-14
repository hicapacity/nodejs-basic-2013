var fs = require('fs');
var fstream = require('fstream');
var unzip = require('unzip');

fs.createReadStream(__dirname + '/../random/Cuprum.zip')
  .pipe(unzip.Extract({ path: 'Cuprum' }));
