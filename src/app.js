const express = require('express');
const morgan = require('morgan');
const config = require('./config');

// Ajusta la ruta según la nueva estructura
const clientes = require('./modulos/clientes/rutas');

const app = express();
const router = express.Router();  // Agrega esta línea para crear el router

app.use(morgan('dev'));
app.use(express.json());  // Agrega esta línea para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.urlencoded({extended: true}));

// Configuración
app.set('port', config.app.port);

// Rutas
app.use('/api/clientes', clientes(router));  // Pasa el router como parámetro

// Agrega esta línea para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Elimina la línea siguiente, ya que la ruta '/api/clientes' ya está en uso
// app.use('/api/clientes', clientes(router));

module.exports = app;
