var express = require('express');
var app = express();

const element="document.getElementById("element");

app.get(/:userid/html, function (req, res) {
res.post(req.params.userid) // element
);}

const PORT = process.env.PORT || 3000
app.listen(PORT)
