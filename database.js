const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/mydatabase')
        .then(db => console.log('La base de datos ha sido conectada en el server: ',db.connection.host))
        .catch(err => console.error(err));
