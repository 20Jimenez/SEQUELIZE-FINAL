let DataTypes  = require('sequelize');
let sequelize = require('../config/database');

let Evento = sequelize.define('Evento', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    ubicacion: { type: DataTypes.STRING, allowNull: false },
    capacidad: { type: DataTypes.INTEGER, allowNull: false },
    inscripciones: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {
    tableName: 'evento',
    timestamps: true,
});

module.exports = Evento;