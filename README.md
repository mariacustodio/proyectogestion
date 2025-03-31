Proyecto Gestión

Colaboradora: María José Custodio Vásquez - CV242178

---

Descripción
Este proyecto es un sistema de gestión de proyectos y tareas desarrollado con React y Next.js en el frontend, y Express con MongoDB en el backend. Permite a los usuarios registrarse, iniciar sesión y gestionar proyectos y tareas. La aplicación interactúa con una API REST para almacenar y recuperar datos.

---

Cómo Ejecutar la Aplicación
Prerrequisitos

Node.js instalado 
MongoDB instalado y corriendo (para el backend).
Git para clonar el repositorio (si es necesario).

1. Ejecutar el Backend
-Abrir una terminal y navegar a la carpeta backend:
cd backend

- Instalar las dependencias del backend:
npm install

- Configurar el archivo .env (en la carpeta backend). Por ejemplo:
MONGODB_URI=mongodb://localhost:27017/mi_base_de_datos
PORT=5000

- Iniciar el servidor:
node server.js

- Debería verse un mensaje como:
Conectado a MongoDB y servidor corriendo en http://localhost:5000.

2. Ejecutar el Frontend
- Abrir otra terminal y navegar a la carpeta frontend:
cd frontend

- Instalar las dependencias del frontend:
npm install

- Iniciar el servidor de desarrollo de Next.js:
npm run dev

- El servidor se iniciará en http://localhost:3000. Abrir esa URL en el navegador para ver la aplicación.

---

Estructura del proyecto
El proyecto se divide en dos partes principales:

1. Backend:
Contiene el servidor Express que se conecta a MongoDB y maneja la API REST.
server.js: Archivo principal del servidor.
models/: Modelos de Mongoose (por ejemplo, User.js, Project.js).
routes/: Rutas para gestionar usuarios, proyectos y tareas.

2. Frontend:
Aplicación construida con Next.js (usando el Pages Router) para la interfaz de usuario.
pages/: Contiene las páginas como index.tsx, login.tsx, signup.tsx, etc.
styles/: Archivos de estilos globales (por ejemplo, globals.css).

---

Funcionalidades implementadas
- Autenticación de usuarios
- Formularios para registro e inicio de sesión.
- Validaciones básicas (pendiente de implementar autenticación completa con JWT y roles).

Gestión de proyectos y tareas:
- Rutas en el backend para crear, obtener y actualizar proyectos.
- Estructura base para gestionar tareas dentro de cada proyecto.

Interfaz de usuario responsiva:
- Uso de Next.js con una estructura de páginas para el frontend.

Estilos básicos 
- Integración con API REST:
- Uso de Axios (y eventualmente react-query) para conectar el frontend con el backend.

---

Progreso del Proyecto

Backend (API REST con Node.js y Express)
- Desarrollo del servidor Express: Completado
- Conexión a la base de datos (MongoDB): Completado
- Rutas de autenticación (Registro, Inicio de sesión): Pendiente
- Rutas para gestión de proyectos y tareas: Pendiente

% de avance en backend: 40%

---

Frontend (React + Next.js)
- Estructura de componentes (Formulario de login, página de inicio): Completado
- Conexión con la API (Autenticación, Proyectos, Tareas): Pendiente
- Interfaz de usuario con Bootstrap (Formulario estilizado): Completado

% de avance en frontend: 30%

---

Conexión entre el Frontend y el Backend (Integración)
- Autenticación y envío de tokens JWT: Pendiente
- Recuperar datos de proyectos y tareas de la API: Pendiente

% de avance en integración: 20%

---

Pruebas y Despliegue
- Pruebas de la API y de la UI: Pendiente
- Despliegue en un servidor (Heroku, Vercel, Netlify): Pendiente

% de avance en pruebas y despliegue: 10%

---

Resumen del Progreso Total
Total del Trabajo Completado: 70%