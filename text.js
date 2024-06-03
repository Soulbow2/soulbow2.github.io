var express = require('express');
var app = express();
function server() {
app.post(/html.html, function (req, res) {
res.send("document.getElementById("element").innerHTML= document.getElementById("input").innerHTML;");
});}

var port = process.env.PORT || 3000;

app.listen(port);
