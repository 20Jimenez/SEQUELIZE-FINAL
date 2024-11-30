const { where } = require('sequelize');
let Evento = require('../models/eventoModel')

class EventoService{

    static async obtenerTodo(){
        try{
           let evento = await Evento.findAll();
           return evento
        } catch(e){
            console.log('error')
        }
    }
    static async ObtenerEventosid(id){
        try{
            let eventoid= await Evento.findByPk(id);
            if(!eventoid){
                console.log('evento no encontrado')
            }else{
                return eventoid
            }
            
        }catch(e){
            console.log('error al obtener el evento')
        }
    }

    static async crearEvento(datos){
        try {
           let even = await Evento.create(datos)
           return even
        } catch (e) {
            console.log('evento no creado',e);
        }
    }

    static async actualizarEvento(id, datos) {
        try {
           let [actualizar] =  await Evento.update(datos, {
                where: { id }
            });
            if(actualizar == 0){
                console.log('no se encontro el evento a actualizar')
            }
            else{
                return datos;
            }
        } catch (error) {
            console.log('No se puede actualizar el evento', error);

        }
    }

    static async eliminarEvento(id){
        try{
            let eliminar = await Evento.destroy({where:{id}})
            return eliminar

        }catch(e){
            console.log('No se puede eliminar el evento', e);

        }
    }

}
module.exports = EventoService;