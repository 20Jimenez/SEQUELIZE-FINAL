let InscripcionService = require ('../services/inscripcionService.js')

class InscripcionController{
    static async obtener(req,res){
        try{
           let tareas= await InscripcionService.obtenerT();
            res.json(tareas)
        }
        catch(e){
            res.json({e: 'error'})
        }
    }

    static async crearInscripcion(req, res) {
        let { eventoId, usuarioId } = req.body;
        let inscripcion = await InscripcionService.inscribirUsuario(eventoId, usuarioId);
        res.json(inscripcion);
    }

    static async eliminarInscripcion(req, res) {
        try {
            let { usuarioId, eventoId } = req.body; // Asegúrate de enviar estos datos en la solicitud
            let resultado = await InscripcionService.cancelar(usuarioId, eventoId);
            res.json(resultado)
        } catch (error) {
            console.error('Error al cancelar inscripción:', error);
        }
    }

    static async inscripciones(req,res){
        try {
        let resp= await InscripcionService.inscripciones();
        res.json(resp)
        } catch (error) {
            
        }
     }
}
module.exports = InscripcionController