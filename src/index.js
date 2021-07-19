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
app.use('/api/home',require('./routes/home.routes'))
app.use('/api/citas', require('./routes/citas.routes'));
app.use('/api/ingresar', require('./routes/ingresar.routes'));
app.use('/api/generar',require('./routes/generar.routes'));
app.use('/api/relacionar',require('./routes/relacionar.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
