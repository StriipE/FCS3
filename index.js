var express = require("express");
var app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
})

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});