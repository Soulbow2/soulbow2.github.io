const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`
let textOutput= document.getElementById("outputText");
const textInput =document.getElementById("inputText");
textOutput.innerHTML= textOutput.innerHTML + " " + textInput.value; ${port}`)
})
