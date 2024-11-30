const express = require('express');
let eventoController = require('../controllers/eventoController');

let router = express.Router();
router.get('/evento', eventoController.obtenerTodos);
router.get('/evento/:id', eventoController.obtenerPorId);
router.post('/crear', eventoController.crearEvento);
router.put('/evento/:id', eventoController.actualizarEvento);
router.delete('/evento/:id', eventoController.eliminarEvento);


module.exports = router;