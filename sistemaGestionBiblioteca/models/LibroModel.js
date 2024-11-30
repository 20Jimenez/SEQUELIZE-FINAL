const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Libro = sequelize.define('Libro', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anio_publicacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    disponibilidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    cantidad_disponible: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad_total: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Libros',
    timestamps: false,
    indexes: [] 
});

module.exports = Libro;