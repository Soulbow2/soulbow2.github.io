var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000
app.listen(PORT)

const element="document.getElementById("element");
const input="document.getElementById("input");

app.get(/:post/html, function (req, res) {
res.post(req.get.input) // element
})
