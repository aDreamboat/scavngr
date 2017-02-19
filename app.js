var express = require('express');
var app = express(); 

app.use(express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'))

var index_file = __dirname + '/client/index.html';


require('./server/user-api')(app);



// 404 catch 
app.all('*', function(req, res) {
  console.log('[TRACE] Server 404 request: ', req.originalUrl);
  res.status(200).sendFile(index_file);
});

// start
app.listen(3000, function () {
  console.log('Listening on port 3000!')
});