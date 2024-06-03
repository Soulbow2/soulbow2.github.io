var express = require('express');
var app = express();

app.post(/:, function (req, res) {
res.get();
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
