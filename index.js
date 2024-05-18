const express = require('express')

const app = express();

require('./database');

app.listen(3000);
console.log('Aplicacion subida en el puerto: ',3000);