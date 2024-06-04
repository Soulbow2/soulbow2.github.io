var express = require('express');
var app = express();
const PORT = 3000;



app.listen(PORT, (error) =>{
if (!error)
console.log("Server is Successful Port is: " + PORT)
else {"server is Not Running", error);});
