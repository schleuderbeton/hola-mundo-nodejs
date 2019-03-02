const express = require('express');
const app = express();

const rome2rio = require("./routes/rome2rio");

//app.get('/', function (request, response) {
//    response.send('Hola Mundo Quattro!');
//});

app.use("/rome2rio", rome2rio);

app.get("*", function(request, response) {
    response.send('Hola Mundo Quattro!');
});

app.listen(3001, function () {
    console.log('hm4 has started and listening on port 3001!');
});