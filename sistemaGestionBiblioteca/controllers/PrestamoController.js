const PrestamoService = require('../services/PrestamoService');
const LibroService = require('../services/LibroService');

class PrestamoController {
    static async ObtenerPrestamo(req, res) {
        try {
            const prestamos = await PrestamoService.obtenerT();
            res.status(200).json(prestamos);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los préstamos', detalles: error.message });
        }
    }

    static async ObtenerPrestamoid(req, res) {
        const { id } = req.params;
        try {
            const prestamo = await PrestamoService.ObtenerPrestamoid(id);
            if (prestamo) {
                res.status(200).json(prestamo);
            } else {
                res.status(404).json({ error: 'Préstamo no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el préstamo', detalles: error.message });
        }
    }

    static async crearPrestamo(req, res) {
        try {
            const { libro_id, ...datosPrestamo } = req.body;

            if (!libro_id) {
                return res.status(400).json({ error: 'El ID del libro es obligatorio para realizar un préstamo.' });
            }

            const libro = await LibroService.ObtenerLibroid(libro_id);
            if (!libro) {
                return res.status(404).json({ error: 'Libro no encontrado.' });
            }

            if (libro.cantidad_disponible <= 0) {
                return res.status(400).json({ error: 'No hay suficientes ejemplares disponibles para prestar.' });
            }

            const nuevoPrestamo = await PrestamoService.crearPrestamo({
                libro_id,
                ...datosPrestamo,
            });

            const nuevaCantidad = libro.cantidad_disponible - 1;
            await LibroService.actualizarLibro(libro_id, { cantidad_disponible: nuevaCantidad });

            res.status(201).json({
                mensaje: 'Préstamo creado exitosamente',
                prestamo: nuevoPrestamo,
                libroActualizado: { id: libro_id, nuevaCantidad },
            });
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el préstamo', detalles: error.message });
        }
    }

    static async actualizarPrestamo(req, res) {
        const { id } = req.params;
        const datos = req.body;
        try {
            const actualizado = await PrestamoService.actualizarPrestamo(id, datos);
            if (actualizado) {
                res.status(200).json({ mensaje: 'Préstamo actualizado correctamente', prestamo: actualizado });
            } else {
                res.status(404).json({ error: 'Préstamo no encontrado para actualizar' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el préstamo', detalles: error.message });
        }
    }

    static async eliminarPrestamo(req, res) {
        const { id } = req.params;
        try {
            const eliminado = await PrestamoService.eliminarPrestamo(id);
            if (eliminado) {
                res.status(200).json({ mensaje: 'Préstamo eliminado exitosamente' });
            } else {
                res.status(404).json({ error: 'Préstamo no encontrado para eliminar' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el préstamo', detalles: error.message });
        }
    }
}

module.exports = PrestamoController;