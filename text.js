var express = require('express');
var app = express();
function server() {
app.get(/html.html, function (req, res) {
res.send(document.getElementById("input").value;");
app.post(/html.html, function (res) {
document.getElementById("element"= document.getElementById("input").value;})
});}

var port = process.env.PORT || 3000;

app.listen(port);
