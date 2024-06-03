var express = require('express');
var app = express();

const element="document.getElementById("element");
const input="document.getElementById("input");

app.get(/:element/text-content, function (req, res) {
res.post(element.innerHTML = input.value);
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
