var express = require('express');
var app = express();
function server() {
app.post(/html.html, method=post, function (req, res) {
res.send("document.getElementById("element").value= document.getElementById("input").value;");
});}

var port = process.env.PORT || 3000;

app.listen(port);
