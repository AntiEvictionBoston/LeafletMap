const express = require('express');
const path = require('path');
const app = express()

app.use(express.static(__dirname + '/build'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname + '/build', 'index.html'))
})

const port = process.env.PORT || 8080
app.listen(port);
console.log(`server started on port ${port}`);
