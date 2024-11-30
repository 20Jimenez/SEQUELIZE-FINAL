const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
    static async ObtenerUsuario(req, res) {
        try {
            const usuarios = await UsuarioService.obtenerT();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los usuarios', detalles: error.message });
        }
    }

    static async ObtenerUsuarioid(req, res) {
        const { id } = req.params;
        try {
            const usuario = await UsuarioService.ObtenerUsuarioid(id);
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).json({ error: 'Usuario no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el usuario', detalles: error.message });
        }
    }

    static async crearUsuario(req, res) {
        try {
            const nuevoUsuario = await UsuarioService.crearUsuario(req.body);
            res.status(201).json({ mensaje: 'Usuario creado exitosamente', usuario: nuevoUsuario });
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el usuario', detalles: error.message });
        }
    }

    static async actualizarUsuario(req, res) {
        const { id } = req.params;
        const datos = req.body;
        try {
            const actualizado = await UsuarioService.actualizarUsuario(id, datos);
            if (actualizado) {
                res.status(200).json({ mensaje: 'Usuario actualizado correctamente', usuario: actualizado });
            } else {
                res.status(404).json({ error: 'Usuario no encontrado para actualizar' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el usuario', detalles: error.message });
        }
    }

    static async eliminarUsuario(req, res) {
        const { id } = req.params;
        try {
            const eliminado = await UsuarioService.eliminarUsuario(id);
            if (eliminado) {
                res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' });
            } else {
                res.status(404).json({ error: 'Usuario no encontrado para eliminar' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el usuario', detalles: error.message });
        }
    }
}

module.exports = UsuarioController;