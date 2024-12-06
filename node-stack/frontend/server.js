// Módulos
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const express = require('express');
const app = express();

const LOCAL = 'http://localhost:5000/api/topics';

// Configuración de motor de plantillas
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', async (_, res) => {
    console.log('Request received at "/" route'); // Log para saber que se ejecuta la ruta
    try {
        console.log('Fetching topics from API...'); // Antes de la petición al backend
        const response = await fetch(process.env.API_URI || LOCAL);
        const topics = await response.json();
        console.log('Topics fetched:', topics); // Log de los datos recibidos
        res.render('index', { topics });
    } catch (err) {
        console.error('Error fetching topics:', err); // Log de errores en la consola
        res.status(500).send('Error fetching topics');
    }
});

// Inicio del servidor
app.listen(3000, '0.0.0.0', () => {
    console.log(`Server running on port 3000 with ${process.env.API_URI || LOCAL}`);
});
