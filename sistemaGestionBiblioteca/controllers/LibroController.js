const LibroService = require('../services/LibroService');
const UsuarioService = require('../services/UsuarioService');

class LibroController {
  static async ObtenerLibro(req, res) {
    try {
      const libros = await LibroService.obtenerT();
      res.status(200).json({ data: libros });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al obtener los libros', error: error.message });
    }
  }

  static async ObtenerLibroid(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ success: false, message: 'El ID del libro es obligatorio' });
      }

      const libro = await LibroService.ObtenerLibroid(id);
      if (!libro) {
        return res.status(404).json({ success: false, message: 'Libro no encontrado' });
      }

      res.status(200).json({ success: true, data: libro });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al obtener el libro', error: error.message });
    }
  }

  static async crearLibro(req, res) {
    try {
      const { usuario_id } = req.body; 
      const esAdmin = await UsuarioService.verificarAdmin(usuario_id);

      if (!esAdmin) {
        return res.status(403).json({ success: false, message: 'No tienes permisos para realizar esta acción' });
      }

      const { titulo, autor, anio_publicacion, cantidad_disponible, cantidad_total } = req.body;
      if (!titulo || !autor || !anio_publicacion || !cantidad_disponible || !cantidad_total) {
        return res.status(400).json({
          success: false,
          message: 'Faltan datos requeridos para crear el libro',
        });
      }

      const nuevoLibro = await LibroService.crearLibro(req.body);
      res.status(201).json({ success: true, data: nuevoLibro, message: 'Libro creado exitosamente' });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

  static async actualizarLibro(req, res) {
    try {
      const { id } = req.params;
      const { usuario_id } = req.body;

      const esAdmin = await UsuarioService.verificarAdmin(usuario_id);
      if (!esAdmin) {
        return res.status(403).json({ success: false, message: 'No tienes permisos para realizar esta acción' });
      }

      const datos = req.body;
      const libroActualizado = await LibroService.actualizarLibro(id, datos);
      res.status(200).json({ success: true, data: libroActualizado, message: 'Libro actualizado exitosamente' });
    } catch (error) {
      res.status(404).json({ success: false, message: 'Error al actualizar el libro', error: error.message });
    }
  }

  static async eliminarLibro(req, res) {
    try {
      const { id } = req.params;
      const { usuario_id } = req.body;

      const esAdmin = await UsuarioService.verificarAdmin(usuario_id);
      if (!esAdmin) {
        return res.status(403).json({ success: false, message: 'No tienes permisos para realizar esta acción' });
      }

      const mensaje = await LibroService.eliminarLibro(id);
      res.status(200).json({ success: true, message: mensaje });
    } catch (error) {
      res.status(404).json({ success: false, message: 'Error al eliminar el libro', error: error.message });
    }
  }

  static async obtenerLibrosMasSolicitados(req, res) {
    try {
      const librosMasSolicitados = await LibroService.librosMasSolicitados();
      res.status(200).json({ success: true, data: librosMasSolicitados });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al obtener los libros más solicitados', error: error.message });
    }
  }

  static async obtenerPrestamosRecientes(req, res) {
    try {
      const prestamosRecientes = await LibroService.prestamosMasRecientes();
      res.status(200).json({ success: true, data: prestamosRecientes });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al obtener los préstamos recientes', error: error.message });
    }
  }
}

module.exports = LibroController;