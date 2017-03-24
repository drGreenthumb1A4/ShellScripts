var express = module.require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.listen(8080, function(req, res){
    console.log("Listening on 8080");
});

app.post('/listen', function(req, res){
    console.log(req.body);
    res.status(200).json({ status: true });
});