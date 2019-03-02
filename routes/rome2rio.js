// imports
const express = require("express");
const app = express();

// config - api creation
app.get('/', function (request, response) {
    //response.send('Hola Mundo Quattro!');
    response.send(JSON.stringify({texts: [
            {text: "Hola"},
            {text: "Hallo"},
            {text: "Ciao"},
            {text: "Salut"},
        ]}))
});

// exports
module.exports = app;