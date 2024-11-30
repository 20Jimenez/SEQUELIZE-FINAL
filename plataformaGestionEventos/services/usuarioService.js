let Usuario = require('../models/usuarioModel')
let Evento = require('../models/eventoModel');
let Inscripcion = require('../models/inscripcionModel')

class UsuarioService{
    static async obtenerUsuario(){
        try{
           let usuario = await Usuario.findAll();
           return usuario
        } catch(e){
            console.log('error')
        }
    }
    static async ObtenerUsuarioid(id){
        try{
            let usuarioid= await Usuario.findByPk(id);
            if(!usuarioid){
                console.log('tarea no encontrada')
            }else{
                return usuarioid
            }
            
        }catch(e){
            console.log('error al obtener la tarea ')
        }
    }

    static async crearUsuario(datos){
        try {
           let usua =  Usuario.create(datos)
           return usua
        } catch (e) {
            console.log('tarea no creadad');
        }
    }

    static async actualizarUsuario(id, datos) {
        try {
           let [actualizar] =  await Usuario.update(datos, {
                where: { id }
            });
            if(actualizar == 0){
                console.log('no se encontro la tarea a actualizar')
            }
            else{
                return datos;
            }            
        } catch (error) {
            console.log('No se puede actualizar la tarea', error);

        }
    }

    static async eliminarUsuario(id){
        try{
            let eliminar = await Usuario.destroy({where:{id}})
            return eliminar

        }catch(e){
            console.log('No se puede eliminar la tarea', e);

        }
    }

    static async obtenerUsuariosEventos() {
        try {
            let usuarioId = req.params.id; 
    
            let usuario = await Usuario.findOne({
                where: { id: usuarioId },
                attributes:['nombre'],
                include: {
                    model: Evento,
                    attributes: ['nombre']
                }
            });
    
            if (!usuario) {
                return res.json({ message: 'Usuario no encontrado' });
            }
    
            res.json(usuario);
        } catch (error) {
            console.error('Error al obtener el usuario con eventos:', error);
        }
    }

}

module.exports = UsuarioService