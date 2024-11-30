let UsuarioService = require('../services/usuarioService')

class UsuarioController{
    static async obtenerTodos(req,res){
        try{
           let usuarios= await UsuarioService.obtenerUsuario();
            res.json(usuarios)
        }
        catch(e){
            res.json({e: 'error'})
        }
    }
    static async obtenerPorId(req,res){
       try{
           let resultado = await UsuarioService.ObtenerUsuarioid(req.params.id)
           res.json(resultado);
       }
       catch{

       }
    }
static async crearUsuario(req,res){
   try {
       let resp= await UsuarioService.crearUsuario(req.body);
       res.json(resp);
   } catch (error) {
       
   }
}
    static async actualizarUsuario(req,res){
       let {id}= req.params;
       let datos= req.body;
       try {
           let respues = await UsuarioService.actualizarUsuario(id,datos);
           res.json(respues)
       } catch (error) {
           
       }

    }
    static async eliminarUsuario(req,res){
       let {id}= req.params;
       try {
           let respue = await UsuarioService.eliminarUsuario(id);
           res.json(respue)
       } catch (error) {
           
       }
    }

    static async obtenerUsuariosEventos(req, res) {
        try {
            const usuariosEventos = await UsuarioService.obtenerUsuariosEventos();
            res.json(usuariosEventos);
        } catch (error) {
        }
    }

}

module.exports= UsuarioController