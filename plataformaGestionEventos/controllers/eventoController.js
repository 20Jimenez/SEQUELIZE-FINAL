let EventoService = require('../services/eventoService.js')

class EventoController{
    static async obtenerTodos(req,res){
        try{
           let tareas= await EventoService.obtenerTodo();
            res.json(tareas)
        }
        catch(e){
            res.json({e: 'error'})
        }
    }
    static async obtenerPorId(req,res){
       try{
           let resultado = await EventoService.ObtenerEventosid(req.params.id)
           res.json(resultado);
       }
       catch{

       }
    }
static async crearEvento(req,res){
   try {
    let resp = await EventoService.crearEvento(req.body);
       res.json(resp);
       
   } catch (error) {
       console.log('error al crear el Evento',error)
   }
}
    static async actualizarEvento(req,res){
       let {id}= req.params;
       let datos= req.body;
       try {
           let respues = await EventoService.actualizarEvento(id,datos);
           res.json(respues)
       } catch (error) {
           
       }

    }
    static async eliminarEvento(req,res){
       let {id}= req.params;
       try {
           let respue = await EventoService.eliminarEvento(id);
           res.json({respue:'se elimino correctamente'})
       } catch (error) {
           
       }
    }
    static async TraerTareaCategoria (req,res){
       try {
       let respTC= await EventoService.TraerTareaCategoria();
       res.json(respTC)
       } catch (error) {
           
       }
    }
}
module.exports= EventoController;