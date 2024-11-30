const express = require('express');
let PrestamoController = require('../controllers/PrestamoController');

let router = express.Router();
router.get('/prestamo', PrestamoController.ObtenerPrestamo);
router.get('/prestamo/:id',PrestamoController.ObtenerPrestamoid)
router.post('/prestamo', PrestamoController.crearPrestamo);
router.put('/prestamo/:id', PrestamoController.actualizarPrestamo);
router.delete('/prestamo/:id', PrestamoController.eliminarPrestamo);


module.exports = router