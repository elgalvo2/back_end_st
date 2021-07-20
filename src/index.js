// es necesario validar las peticiones desde el front ende ---- > ver README
const express = require('express');
const morgan = require('morgan');
const path = require('path');



const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/api/home',require('./routes/home.routes'))  // actualizado
app.use('/api/citas', require('./routes/citas.routes'));  // actualizado
app.use('/api/ingresar', require('./routes/ingresar.routes')); // verificado
app.use('/api/generar',require('./routes/generar.routes')); // actualizado
app.use('/api/relacionar',require('./routes/relacionar.routes')); // verificado

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
