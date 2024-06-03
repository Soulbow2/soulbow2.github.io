var express = require('express');
var app = express();

app.get(/:, function (req, res) {
res.post();
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
