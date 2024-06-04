var express = require('express');
var app = express();
const PORT = 3000;

app.get('/html.html', (req, res)=>{

res.set('Content-Type', 'text/html');
res.status(200).send("<h1>This is Live Input</h1>");
});

app.listen(PORT, (error) =>{
if (!error)
console.log("Server is Successful Port is: " + PORT)
else console.log"server is Not Running", error);
});
