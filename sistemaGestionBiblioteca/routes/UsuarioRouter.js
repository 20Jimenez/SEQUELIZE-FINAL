const express = require('express');
let UsuarioController = require('../controllers/UsuarioController');

let router = express.Router();
router.get('/usuario', UsuarioController.ObtenerUsuario);
router.get('/usuario/:id',UsuarioController.ObtenerUsuarioid)
router.post('/usuario', UsuarioController.crearUsuario);
router.put('/usuario/:id', UsuarioController.actualizarUsuario);
router.delete('/usuario/:id', UsuarioController.eliminarUsuario);


module.exports = router