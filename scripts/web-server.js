var express = require('express');
var path = require('path');
var src = express();
var rootPath = path.normalize(__dirname + '/../');

src.use(express.static(rootPath + '/app'));

src.listen(8000);
console.log('Listening on port 8000 on Express webserver...');