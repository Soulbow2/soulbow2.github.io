var express = require('express');
var app = express();

app.post(/html.html, function (res) {
document.getElementById("element").innerHTML= document.getElementById("input").value;
});}

var port = process.env.PORT || 3000;

app.listen(port);
