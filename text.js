var express = require('express');
var app = express();

app.get(/html.html:, function (req, res) {
res.send(document.getElementById("element").style.background="black");
})

app.listen(3000)
