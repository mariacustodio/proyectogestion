const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.log('Error de conexión:', err));

// Ruta para la raíz
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Ruta para obtener los proyectos
app.get('/proyectos', async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.status(200).json(proyectos);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener proyectos' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
