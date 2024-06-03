var express = require('express');
var app = express();
function server() {
app.post(/html.html, function (req, res) {
res.send("document.getElementById("element").innHTML= document.getElementById("input").value;");
});}

var port = process.env.PORT || 3000;

app.listen(port);
