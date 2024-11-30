const Prestamo = require('../models/PrestamoModel');

class PrestamoService {
    static async obtenerT() {
        try {
            const prestamos = await Prestamo.findAll();
            return prestamos;
        } catch (error) {
            console.error('Error al obtener los préstamos:', error.message);
            throw new Error('No se pudieron obtener los préstamos');
        }
    }

    static async ObtenerPrestamoid(id) {
        try {
            const prestamo = await Prestamo.findByPk(id);
            if (!prestamo) {
                throw new Error('Préstamo no encontrado');
            }
            return prestamo;
        } catch (error) {
            console.error('Error al obtener el préstamo:', error.message);
            throw new Error('No se pudo obtener el préstamo');
        }
    }

    static async crearPrestamo(datos) {
        try {
            const nuevoPrestamo = await Prestamo.create(datos);
            return nuevoPrestamo;
        } catch (error) {
            console.error('Error al crear el préstamo:', error.message);
            throw new Error('No se pudo crear el préstamo');
        }
    }

    static async actualizarPrestamo(id, datos) {
        try {
            const [actualizado] = await Prestamo.update(datos, { where: { id } });
            if (actualizado === 0) {
                throw new Error('Préstamo no encontrado para actualizar');
            }
            const prestamoActualizado = await Prestamo.findByPk(id);
            return prestamoActualizado;
        } catch (error) {
            console.error('Error al actualizar el préstamo:', error.message);
            throw new Error('No se pudo actualizar el préstamo');
        }
    }

    static async eliminarPrestamo(id) {
        try {
            const eliminado = await Prestamo.destroy({ where: { id } });
            if (eliminado === 0) {
                throw new Error('Préstamo no encontrado para eliminar');
            }
            return { mensaje: 'Préstamo eliminado correctamente' };
        } catch (error) {
            console.error('Error al eliminar el préstamo:', error.message);
            throw new Error('No se pudo eliminar el préstamo');
        }
    }
}

module.exports = PrestamoService;