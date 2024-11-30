const express = require('express');
let dotenv = require('dotenv');
let sequelize = require('./config/database');
const eventoRouter = require('./routers/eventoRouter');
const usuarioRouter = require('./routers/usuarioRouter')
const inscripcionRouter = require('./routers/inscripcionRouter');
dotenv.config();
const App = express();
const port = process.env.PORT;
App.use(express.json());

App.use('/api',eventoRouter);
App.use('/api',usuarioRouter);
App.use('/api',inscripcionRouter);


let startDB = async()=>{
    try{
        await sequelize.sync();
        console.log('base de datos sincronizada');

    App.listen(port, ()=>{
            console.log('El servidor se esta ejecutando '+ port)});
        
    }catch(e){
        console.log('error al conectar la base de datos' + e);
    }
}
startDB();
