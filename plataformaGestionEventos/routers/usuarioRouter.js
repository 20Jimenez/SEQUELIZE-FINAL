const express = require('express');
let usuarioController = require('../controllers/usuarioController');

let router = express.Router();
router.get('/usuario', usuarioController.obtenerTodos);
router.get('/usuario/:id', usuarioController.obtenerPorId);
router.post('/usuario', usuarioController.crearUsuario);
router.put('/usuario/:id', usuarioController.actualizarUsuario);
router.delete('/usuario/:id', usuarioController.eliminarUsuario);
router.get('/usuarioevento/:id', usuarioController.obtenerUsuariosEventos);

module.exports = router;