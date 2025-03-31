// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Inicializar Express
const app = express();
const port = process.env.PORT || 5000;

// Importar el modelo Proyecto
const Proyecto = require('./models/Proyecto');

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.log('Error de conexión:', err));

// Ruta para obtener todos los proyectos
app.get('/proyectos', async (req, res) => {
  try {
    // Obtener los proyectos desde la base de datos
    const proyectos = await Proyecto.find();
    res.status(200).json(proyectos);  // Enviar los proyectos como respuesta JSON
  } catch (err) {
    res.status(500).json({ message: "Error al obtener proyectos" });  // Manejo de errores
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
