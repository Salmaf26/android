const express = require('express');
const cors    = require('cors');
const mysql   = require('mysq12');
const myConnection = require('express-myconnection');

const dbOptions   = require(' ../database/dbConfig');
//const promisePool = require('../database/dbPool');



class Server {

    constructor(){
            this.app = express();
            this.port = 8080;

            this.paths = {
                usuarios: '/api/usuarios'
            }

            this.middlewares();

            this.routes();
        }

    middlewares(){

        //lectura y parseo del body
        this.app.use( express.json() );

        //directorio publico
        this.app.use( express.static("public") );

        //cors
        this.app.use( cors() );

        //conexion bd
        this.app.use( myConnection( mysql, dbOptions, 'request' ) );

    }

    routes(){
        this.app.use( this.paths.usuarios, require('../routes/user.routes') );    
    
    }

    listen(){
        this.app.listen( this.port, () => {
                console.info('Servidor corriendo en puerto', this.port);
        });

    }
}

module.exports = Server;