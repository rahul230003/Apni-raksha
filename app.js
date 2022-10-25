var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var app = express();
app.use(express.static('Public'));
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
});
app.post('/predictor',function(req,res){
    res.send(req.body.name);
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})