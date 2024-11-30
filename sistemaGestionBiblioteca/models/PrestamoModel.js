const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Prestamo = sequelize.define('Prestamo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
 
    libro_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'libros',
            key: 'id'
        }
    },
    fecha_prestamo: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_devolucion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    estado: {
        type: DataTypes.ENUM('prestado', 'devuelto'),
        defaultValue: 'prestado'
    }
}, {
    tableName: 'Prestamos',
    timestamps: false,
    indexes: [] 
});

module.exports = Prestamo;