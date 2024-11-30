const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuarioModel');
const Evento = require('./eventoModel');

const Inscripcion = sequelize.define('Inscripcion', {
    usuarioId: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id',
        },
    },
    eventoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Evento,
            key: 'id',
        }
}, 
},{
    tableName: 'inscripcion',
    timestamps: true,
});

Inscripcion.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Inscripcion.belongsTo(Evento, { foreignKey: 'eventoId' });

module.exports = Inscripcion;
