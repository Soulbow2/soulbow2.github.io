var express = require('express');
var app = express();

app.get(/html.html:, function (req, res) {
res.send(document.getElementById("element").background="black");
})

app.listen(3000)
