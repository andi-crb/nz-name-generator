var express = require('express');
var app = express();
var path = require('path');
var data = require('./data/db.json')


// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'data')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
var port = server.address().port;
  console.log('Magic happens on port ' + port);
  console.log((path.join(__dirname, 'data')))
});

// app.param('key', function (req, res, next, id) {
//   console.log('working');
//   next();
// });

app.get('/namebykey/:key', function(req, res){
  console.log(req.params)
  // console.log(res)
  res.json(data.nameObjects[0][req.params.key])
  // res.send(res.nameObjects[0][key]);

});

// app.listen(3000);