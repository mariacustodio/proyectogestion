// Requerir las dependencias necesarias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Crear la aplicación Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error de conexión a MongoDB: ', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor de Express!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
